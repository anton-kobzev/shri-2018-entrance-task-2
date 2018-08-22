export default class Slider {
    constructor(scrollElem, controls, options) {
        this.scrollElem = document.querySelector(scrollElem)
        this.controls = document.querySelectorAll(controls)
        this.controlLeft = document.querySelector(controls + ".control_left")
        this.controlRight = document.querySelector(controls + ".control_right")

        if (options !== undefined) {
            this.withSections = options.withSections
        }

        this.addEventListeners()
        this.refresh()
    }

    addEventListeners() {
        this.controls.forEach(control => {
            control.addEventListener("click", () => {
                let start = this.scrollElem.scrollLeft,
                    currentTime = 0,
                    change = this.getScrollBy(),
                    increment = 5,
                    duration = this.withSections ? 90 : 150,
                    scrollToLeft = control.classList.contains("control_left")

                if (scrollToLeft) change *= -1

                const animateScroll = () => {
                    currentTime += increment
                    this.scrollElem.scrollLeft = Slider.easing(
                        currentTime,
                        start,
                        change,
                        duration
                    )
                    if (currentTime < duration) {
                        requestAnimationFrame(animateScroll)
                    }
                }

                animateScroll()
            })
        })

        this.scrollElem.addEventListener(
            "scroll",
            () => {
                this.refresh()
            },
            { passive: true }
        )
    }

    refresh() {
        this.controlLeft.classList.remove("disabled")
        this.controlRight.classList.remove("disabled")
        if (this.scrollElem.scrollLeft == 0) {
            this.controlLeft.classList.add("disabled")
        }
        if (
            this.scrollElem.scrollWidth - this.scrollElem.scrollLeft <=
            this.scrollElem.clientWidth
        ) {
            this.controlRight.classList.add("disabled")
        }
    }

    getScrollBy() {
        if (this.withSections) {
            // Постраничная прокрутка на больших экранах, поэлементная на меньших
            return window.innerWidth > 1365 ? 648 : 215
        }

        return 400
    }

    static easing(t, b, c, d) {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t + b
        t--
        return (-c / 2) * (t * (t - 2) - 1) + b
    }
}
