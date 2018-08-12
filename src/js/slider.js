export default class Slider {
  constructor(scrollElem, controls) {
    this.scrollElem = document.querySelector(scrollElem);
    this.controls = document.querySelectorAll(controls);
    this.controlLeft = document.querySelector(controls + ".control_left");
    this.controlRight = document.querySelector(controls + ".control_right");

    this.addEventListeners();
    this.refresh();
  }

  addEventListeners() {
    this.controls.forEach(control => {
      control.addEventListener("click", () => {
        let start = this.scrollElem.scrollLeft,
          currentTime = 0,
          change = this.getScrollBy(),
          increment = 5,
          duration = 250,
          scrollToLeft = control.classList.contains("control_left");

        if (scrollToLeft) change *= -1;

        const animateScroll = () => {
          currentTime += increment;
          this.scrollElem.scrollLeft = Slider.easeInOutQuad(
            currentTime,
            start,
            change,
            duration
          );
          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };

        animateScroll();
      });
    });

    this.scrollElem.addEventListener("scroll", e => {
      this.refresh();
    });
  }

  refresh() {
    this.controlLeft.classList.remove("disabled");
    this.controlRight.classList.remove("disabled");
    if (this.scrollElem.scrollLeft == 0) {
      this.controlLeft.classList.add("disabled");
    }
    if (
      this.scrollElem.scrollWidth - this.scrollElem.scrollLeft <=
      this.scrollElem.clientWidth
    ) {
      this.controlRight.classList.add("disabled");
    }
  }

  static easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  getScrollBy() {
    // TODO: возможность листания секций убрать в параметры, пока для простоты так
    if (
      this.scrollElem.classList.contains("slider_with-sections") &&
      window.innerWidth > 1365
    ) {
      return 200 * 3 + 15 * 3 + 3;
    }

    return 215;
  }
}
