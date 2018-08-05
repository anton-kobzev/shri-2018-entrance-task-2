import { tns } from "tiny-slider/src/tiny-slider";
import { showDevicePopup } from "./popup";

window.onload = () => {
  /* 
   Инициализация слайдеров
   */

  // Скрытие подсказки при прокрутке вертикального слайдера
  document
    .querySelector(".vertical-slider-wrapper")
    .addEventListener("scroll", e => {
      e.target.querySelector(".slider__tip-wrapper").style.opacity = 0;
    });

  tns({
    container: ".favorite-scenarios .slider",
    loop: false,
    nav: false,
    items: 1,
    slideBy: 1,
    gutter: 15,
    autoWidth: true,
    controlsContainer: ".favorite-scenarios .block__controls-wrapper",
    disable: true,
    responsive: {
      940: {
        disable: false
      },
      1330: {
        items: 3,
        slideBy: 3
      },
      1120: {
        items: 2,
        slideBy: 2
      }
    },
    useLocalStorage: false // TODO: включить на production
  });

  tns({
    container: ".favorite-devices .slider",
    items: 6,
    loop: false,
    nav: false,
    slideBy: 3,
    gutter: 15,
    autoWidth: true,
    controlsContainer: ".favorite-devices .block__controls-wrapper",
    disable: true,
    responsive: {
      940: {
        disable: false
      }
    },
    useLocalStorage: false // TODO: включить на production
  });

  /*
   Инициализация попапов управления устройствами
   */
  document.querySelectorAll(".device").forEach(elem => {
    elem.addEventListener("click", () => {
      showDevicePopup(document.querySelector(".device-popup"));
    });
  });
};
