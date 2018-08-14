export function initDropdownButtons() {
    document.querySelectorAll(".button_dropdown").forEach(dropdown => {
        const caption = dropdown.querySelector(".button__dropdown-caption"),
            items = dropdown.querySelectorAll(".button__dropdown-item")

        const markSelected = item => {
            items.forEach(item => {
                item.classList.remove("button__dropdown-item_selected")
            })
            item.classList.add("button__dropdown-item_selected")
        }

        dropdown.addEventListener("click", e => {
            if (e.target.classList.contains("button__dropdown-item")) {
                markSelected(e.target)
                caption.innerText = e.target.innerText
            }
            dropdown.classList.toggle("button_dropdown-opened")
        })
    })
}
