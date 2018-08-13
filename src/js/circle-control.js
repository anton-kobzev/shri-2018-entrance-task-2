import * as d3 from "d3";

export default class CirlceControl {
  constructor(elem, options) {
    this.elem = elem;

    this.maxValue = options.maxValue;
    this.size = options.size;
    this.center = options.size / 2;
    this.radius = options.size / 2 - options.stroke;
    this.stroke = options.stroke;
    this.startAngle = -CirlceControl.radians(150);

    this.onValueChange = options.onValueChange;

    this.renderInitial();
    this.setValue(options.value);

    if (options.addEventsListeners) {
      this.addEventsListeners();
    }
  }

  renderInitial() {
    this.svg = d3
      .select(this.elem)
      .append("svg")
      .attr("width", this.size + 1 + "px")
      .attr("height", this.size + 1 + "px")
      .attr("draggable", "false");

    this.svg.append("defs").html(
      `<filter x="-3.9%" y="-2.8%" width="107.9%" height="107.9%" filterUnits="objectBoundingBox" id="filter-2">
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0.524208121   0 0 0 0 0.475951723   0 0 0 0 0.279116418  0 0 0 0.446388134 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
      </filter>`
    );

    this.svg
      .append("circle")
      .attr("fill", "none")
      .attr("cx", this.center)
      .attr("cy", this.center)
      .attr("r", this.radius)
      .attr("stroke", "#333")
      .attr("stroke-width", this.stroke * 2)
      .attr("draggable", "false");

    const sectorArc = d3
      .arc()
      .innerRadius(this.radius)
      .outerRadius(this.radius + this.stroke / 2)
      .startAngle(this.startAngle)
      .endAngle(this.angle);

    this.sector = this.svg
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#F5A623")
      .attr("stroke-width", this.stroke)
      .attr("transform", `translate(${this.center}, ${this.center})`)
      .attr("d", sectorArc)
      .attr("draggable", "false");

    this.svg
      .append("circle")
      .attr("fill", "none")
      .attr("cx", this.center)
      .attr("cy", this.center)
      .attr("r", this.radius + this.stroke)
      .attr("stroke", "#fff")
      .attr("stroke-width", this.stroke * 2)
      .attr("stroke-dasharray", "4,1")
      .attr("draggable", "false");

    // Скрытие нижнего сектора
    const hideArc = d3
      .arc()
      .innerRadius(this.radius)
      .outerRadius(this.radius + this.stroke * 1.2)
      .startAngle(this.startAngle)
      .endAngle(this.startAngle - (Math.PI + this.startAngle) * 2);

    this.svg
      .append("path")
      .attr("fill", "white")
      .attr(
        "transform",
        `translate(${this.radius + this.stroke}, ${this.radius + this.stroke})`
      )
      .attr("d", hideArc);

    this.svg
      .append("circle")
      .attr("fill", "white")
      .attr("cx", this.center)
      .attr("cy", this.center)
      .attr("r", this.radius)
      .attr("filter", "url(#filter-2)")
      .attr("draggable", "false");

    this.circle = this.svg.append("g");
    this.circle
      .append("circle")
      .attr("fill", "white")
      .attr("cx", this.center)
      .attr("cy", this.center)
      .attr("r", this.radius)
      .attr("draggable", "false");

    // Стрелочка
    this.circle
      .append("path")
      .attr(
        "d",
        "M0.311431,5.943579 L5.036156,0.590855 C5.371306,0.211158 5.527735,0.113005 5.715788,0.048431 C5.903841,-0.016144 6.096159,-0.016144 6.284212,0.048431 C6.472265,0.113005 6.628694,0.211158 6.963844,0.590855 L11.688569,5.943579 C12.10381,6.414014 12.10381,7.176739 11.688569,7.647174 C11.489162,7.873085 11.21871,8 10.936707,8 L1.063293,8 C0.476053,8 0,7.460672 0,6.795376 C0,6.47589 0.112025,6.169489 0.311431,5.943579 Z"
      )
      .attr(
        "transform",
        `translate(${this.radius + this.stroke - 6}, ${this.stroke})`
      );

    // Индикатор текущего значения
    this.valueText = this.svg
      .append("text")
      .attr("fill", "#333")
      .attr("font-size", "66px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .attr("class", "circle-control__value-text")
      .attr("x", this.size / 2)
      .attr("y", this.size / 2 + this.size / 10);
  }

  render() {
    const sectorArc = d3
      .arc()
      .innerRadius(this.radius)
      .outerRadius(this.radius + this.stroke / 2)
      .startAngle(this.startAngle - 0.5)
      .endAngle(this.angle - 0.15);
    this.sector.attr("d", sectorArc);

    this.circle.attr("transform", () => {
      var me = this.circle.node();
      var x1 = me.getBBox().x + me.getBBox().width / 2;
      var y1 = me.getBBox().y + me.getBBox().height / 2;

      return `rotate(${CirlceControl.degrees(this.angle)}, ${x1}, ${y1})`;
    });

    const value = this.getValue();
    this.valueText.text(value);
    this.onValueChange(value);
  }

  addEventsListeners() {
    const elem = document.querySelector(this.elem),
      { x, y } = elem.querySelector("svg").getBoundingClientRect();

    elem.addEventListener("mousemove", e => {
      if (e.buttons == 1) {
        this.click(e.clientX - x, e.clientY - y);
        e.preventDefault();
      }
    });
    elem.addEventListener("click", e => {
      this.click(e.clientX - x, e.clientY - y);
    });
    elem.addEventListener("touchmove", e => {
      this.click(e.touches[0].clientX - x, e.touches[0].clientY - y);
    });
  }

  click(clickX, clickY) {
    this.clickX = clickX;
    this.clickY = clickY;
    this.angle = this.calcClickAngle();
    this.render();
  }

  getValue() {
    let value = Math.floor(
      ((this.angle - this.startAngle) / (-this.startAngle * 2)) *
        (this.maxValue + 1)
    );
    if (value < 0) value = 0;
    if (value > this.maxValue) value = this.maxValue;

    if (value > 0) return "+" + value;
    return value;
  }

  setValue(value) {
    this.angle =
      (-this.startAngle * 2 * value) / (this.maxValue + 1) + this.startAngle;
    this.render();
  }

  calcClickAngle() {
    const x = this.clickX,
      y = this.clickY,
      r = Math.hypot(x - this.center, y - this.center);

    let angle = Math.asin(Math.abs(this.center - x) / r);
    if (y > this.center) angle = Math.PI - angle;
    if (x < this.center) angle *= -1;

    if (angle < this.startAngle - 0.08) angle = this.startAngle - 0.08;
    if (angle > -this.startAngle + 0.08) angle = -this.startAngle + 0.08;

    return angle;
  }

  static degrees(radians) {
    return (radians * 180) / Math.PI;
  }

  static radians(degrees) {
    return (degrees * Math.PI) / 180;
  }
}
