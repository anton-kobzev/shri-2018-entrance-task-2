const overlay = document.querySelector(".popup-overlay");
overlay.addEventListener("click", e => {
  if (e.target == overlay) togglePopup();
});

function togglePopup() {
  document.body.classList.toggle("popup-opened");
}

export function showDevicePopup(elem) {
  togglePopup();
  elem
    .querySelectorAll(".device-popup__modal-buttons-wrapper .button")
    .forEach(button => {
      button.addEventListener("click", togglePopup);
    });
  new TemperatureRegulator(elem);
}

class TemperatureRegulator {
  constructor(regulator) {
    this.buttons = regulator.querySelectorAll(
      ".device-popup__buttons-wrapper .button"
    );
    this.range = regulator.querySelector(
      ".range-control_temperature .range-control__input"
    );
    this.valueDisplay = regulator.querySelector(".device-popup__value");

    this.addRangeEventListener();
    this.addButtonsEventListener();
  }

  addRangeEventListener() {
    this.range.addEventListener("input", e => {
      this.setTemperature(e.target.value);
      const manualButton = Array.prototype.find.call(this.buttons, b =>
        b.classList.contains("device-popup__manual-button")
      );
      this.setActiveButton(manualButton);
    });
  }

  addButtonsEventListener() {
    this.buttons.forEach(button => {
      button.addEventListener("click", e => {
        const preset = e.target.dataset["preset"];
        if (preset !== undefined) {
          this.setTemperature(preset);
        }
        this.setActiveButton(e.target);
      });
    });
  }

  setTemperature(temp) {
    this.range.value = temp;
    temp = Math.floor(temp);
    this.valueDisplay.innerHTML = temp > 0 ? "+" + temp : temp;
  }

  setActiveButton(button) {
    this.buttons.forEach(button => {
      button.classList.remove("button_highlight");
    });
    button.classList.add("button_highlight");
  }
}
