export default class Filter {
  constructor(items, filterButtons, onAfterFilter) {
    this.items = document.querySelectorAll(items);
    this.filterButtons = document.querySelectorAll(filterButtons);
    this.onAfterFilter = onAfterFilter;

    this.addEventListeners();
  }

  addEventListeners() {
    this.filterButtons.forEach(button => {
      button.addEventListener("click", e => {
        this.filter(e.target.dataset.filter);
        this.setActiveButton(e.target);
      });
    });
  }

  filter(filter) {
    this.items.forEach(item => {
      if (filter == "all" || item.dataset.filter.split(" ").includes(filter)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
    this.onAfterFilter();
  }

  setActiveButton(button) {
    this.filterButtons.forEach(button => {
      button.classList.remove("button_highlight");
    });
    button.classList.add("button_highlight");
  }
}
