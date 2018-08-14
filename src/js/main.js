import { initDropdownButtons } from "./button"
import { showDevicePopup } from "./popup"
import Slider from "./slider"
import Filter from "./filter"

window.onload = () => {
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        document.body.classList.add("is-firefox")
    }

    if (window.innerWidth < 940) {
        document.addEventListener(
            "scroll",
            () => {
                if (window.scrollY > 7) {
                    document.body.classList.add("scrolled")
                } else {
                    document.body.classList.remove("scrolled")
                }
            },
            { passive: true }
        )
    }

    initDropdownButtons()

    const menu = document.querySelector(".header__menu")
    menu.querySelector(".menu__hamburger").addEventListener("click", () => {
        menu.classList.toggle("menu_opened")
        document.body.classList.toggle("header-menu-opened")
    })

    // Инициализация слайдеров

    // Скрытие подсказки при прокрутке вертикального слайдера
    document.querySelectorAll(".scroll-tip-wrapper").forEach(elem => {
        elem.addEventListener(
            "scroll",
            e => {
                e.target.querySelector(".slider__tip-wrapper").style.opacity = 0
            },
            { passive: true }
        )
    })

    const favoriteDevicesSlider = new Slider(
        ".favorite-devices .slider",
        ".favorite-devices .block__control"
    )
    const favoriteScenariosSlider = new Slider(
        ".favorite-scenarios .slider",
        ".favorite-scenarios .block__control"
    )

    // Попапы управления устройствами
    document.querySelectorAll(".device").forEach(elem => {
        elem.addEventListener("click", () => {
            showDevicePopup(elem)
        })
    })

    // Фильтр устройств
    new Filter(
        ".favorite-devices .device",
        ".favorite-devices .device-filter__button",
        () => {
            setTimeout(() => {
                favoriteDevicesSlider.refresh()
            }, 500)
        }
    )
}
