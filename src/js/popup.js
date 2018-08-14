import RangeControl from "./range-control"
import CirlceControl from "./circle-control"

const popupContainer = document.querySelector(".popup-container")
const overlay = document.querySelector(".overlay_popup")
overlay.addEventListener("click", e => {
    if (e.target == overlay) togglePopup()
})

window.togglePopup = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const transitionDuration = 500,
                popup = document.querySelector(".popup")

            if (popup) {
                popup.style.transition = `all ${transitionDuration}ms cubic-bezier(0.165, 0.84, 0.44, 1)`
                popup.classList.toggle("popup_opened")
            }

            document.body.classList.toggle("popup-opened")

            setTimeout(() => {
                resolve()
            }, transitionDuration)
        }, 10)
    })
}

function animateOpen(popup, deviceElem) {
    const rect = deviceElem.getBoundingClientRect()
    const scale = (rect.right - rect.left) / popup.clientWidth

    popup.style.left = rect.left + "px"
    popup.style.top = rect.top + "px"
    popup.style.transform = `scale(${scale})`

    return togglePopup()
}

export function showDevicePopup(deviceElem) {
    const title = deviceElem.dataset.title,
        subtitle = deviceElem.dataset.subtitle

    const type = deviceElem.dataset["type"]

    if (type == "temperature") {
        popupContainer.innerHTML = `<div class="popup device-popup device-popup_temperature">
            <div class="device-popup__inner">
                <div class="device-popup__title-wrap">
                    <div class="device-popup__title">${title}
                        <div class="device-popup__subtitle">${subtitle}</div>
                    </div>
                    <div class="device-popup__info">
                        <span class="device-popup__value">+23</span>
                        <span class="device-popup__icon icon icon_temperature"></span>
                    </div>
                </div>
                <div class="device-popup__buttons-wrapper">
                    <button class="button button_highlight device-popup__manual-button">Вручную</button>
                    <button class="button device-popup__preset-button" data-preset="-10">Холодно</button>
                    <button class="button device-popup__preset-button" data-preset="10">Тепло</button>
                    <button class="button device-popup__preset-button" data-preset="20">Жарко</button>
                </div>
                <div class="device-popup__controls-wrapper">
                    <div class="device-popup__control range-control range-control_temperature">
                        <div class="range-control__fill"></div>
                        <div class="range-control__bound range-control__bound_min">–10</div>
                        <input type="range" class="range-control__input"
                               value="23" min="-10" max="30" step="0.01" />
                        <div class="range-control__bound range-control__bound_max">+30</div>
                    </div>
                </div>
            </div>
            <div class="device-popup__modal-buttons-wrapper">
                <button class="button button_highlight" onclick="togglePopup()">Применить</button>
                <button class="button" onclick="togglePopup()">Закрыть</button>
            </div>
        </div>`

        const popup = document.querySelector(".device-popup")
        new RangeControl(popup)
        animateOpen(popup, deviceElem)
    } else if (type == "light") {
        popupContainer.innerHTML = `<div class="popup device-popup device-popup_light">
            <div class="device-popup__inner">
                <div class="device-popup__title-wrap">
                    <div class="device-popup__title">${title}
                        <div class="device-popup__subtitle">${subtitle}</div>
                    </div>
                    <div class="device-popup__info">
                        <span class="device-popup__icon icon icon_sun"></span>
                    </div>
                </div>
                <div class="device-popup__buttons-wrapper">
                    <button class="button button_highlight device-popup__manual-button">Вручную</button>
                    <button class="button device-popup__preset-button" data-preset="10">Дневной свет</button>
                    <button class="button device-popup__preset-button" data-preset="30">Вечерний свет</button>
                    <button class="button device-popup__preset-button" data-preset="20">Рассвет</button>
                </div>
                <div class="device-popup__controls-wrapper">
                    <div class="device-popup__control range-control range-control_light">
                        <div class="range-control__fill"></div>
                        <div class="range-control__bound range-control__bound_icon range-control__bound_min">
                          <span class="icon icon_sun-min"></span>
                        </div>
                        <input type="range" class="range-control__input"
                               value="23" min="0" max="30" step="0.01" />
                        <div class="range-control__bound range-control__bound_icon range-control__bound_max">
                          <span class="icon icon_sun-max"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="device-popup__modal-buttons-wrapper">
                <button class="button button_highlight" onclick="togglePopup()">Применить</button>
                <button class="button" onclick="togglePopup()">Закрыть</button>
            </div>
        </div>`

        const popup = document.querySelector(".device-popup")
        new RangeControl(popup)
        animateOpen(popup, deviceElem)
    } else if (type == "floor") {
        popupContainer.innerHTML = `<div class="popup device-popup device-popup_floor">
            <div class="device-popup__inner">
                <div class="device-popup__title-wrap">
                    <div class="device-popup__title">${title}
                        <div class="device-popup__subtitle">${subtitle}</div>
                    </div>
                    <div class="device-popup__info">
                        <span class="device-popup__value">+23</span>
                        <span class="device-popup__icon icon icon_temperature icon_highlight"></span>
                    </div>
                </div>
                <div class="device-popup__controls-wrapper device-popup__controls-wrapper_circle-control">
                    <div class="device-popup__control circle-control"></div>
                </div>
            </div>
            <div class="device-popup__modal-buttons-wrapper">
                <button class="button button_highlight" onclick="togglePopup()">Применить</button>
                <button class="button" onclick="togglePopup()">Закрыть</button>
            </div>
        </div>`

        const popup = document.querySelector(".device-popup"),
            popupValue = popup.querySelector(".device-popup__value"),
            circleControl = new CirlceControl(
                ".device-popup__control.circle-control",
                {
                    size: 220,
                    stroke: 24,
                    value: 23,
                    maxValue: 26,
                    addEventsListeners: false,
                    onValueChange: value => {
                        popupValue.innerHTML = value
                    }
                }
            )

        animateOpen(popup, deviceElem).then(() => {
            circleControl.addEventsListeners()
        })
    }
}
