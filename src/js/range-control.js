export default class RangeControl {
    constructor(regulator) {
        this.buttons = regulator.querySelectorAll(
            ".device-popup__buttons-wrapper .button"
        )
        this.range = regulator.querySelector(".range-control__input")
        this.valueDisplay = regulator.querySelector(".device-popup__value")

        this.addRangeEventListener()
        this.addButtonsEventListener()
    }

    addRangeEventListener() {
        this.range.addEventListener("input", e => {
            this.setValue(e.target.value)
            const manualButton = Array.prototype.find.call(this.buttons, b =>
                b.classList.contains("device-popup__manual-button")
            )
            this.setActiveButton(manualButton)
        })
    }

    addButtonsEventListener() {
        this.buttons.forEach(button => {
            button.addEventListener("click", e => {
                const preset = e.target.dataset["preset"]
                if (preset !== undefined) {
                    this.setValue(preset)
                }
                this.setActiveButton(e.target)
            })
        })
    }

    setValue(value) {
        this.range.value = value
        value = Math.floor(value)
        if (this.valueDisplay)
            this.valueDisplay.innerHTML = value > 0 ? "+" + value : value
    }

    setActiveButton(button) {
        this.buttons.forEach(button => {
            button.classList.remove("button_highlight")
        })
        button.classList.add("button_highlight")
    }
}
