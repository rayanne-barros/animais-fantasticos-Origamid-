export default function initTooltip() {

  const tooltips = document.querySelectorAll('[data-tooltip]');

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  })

  function onMouseOver(e) {
    const tooltipBox = criarTooltipBox(this);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
  }

  const onMouseLeave = {

    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + 'px';
      this.tooltipBox.style.left = e.pageX + 20 + 'px';
    }
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerHTML = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox

  }
}

