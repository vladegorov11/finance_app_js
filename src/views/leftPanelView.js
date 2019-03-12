import { createElement } from '../helpers/helpers';

export default class LeftPanelView {
  constructor() {
    this.button = document.getElementById('left-panel-button')
    this.button.addEventListener('click', this.hendleOpen.bind(this))
    this.renderPanel();
  }

  createPanel() {
    const title = createElement('h3', { className: 'title is-5' }, 'Settings');
    const input = createElement('input', { type: 'checkbox', id: 'night-mode' });
    const label = createElement('label', { className: 'checkbox' }, input, 'Night mode');
    const panel = createElement('div', { className: 'left-panel', id: 'left-panel' }, title, label);

    return this.addEventListeners(panel)
  }

  hendleOpen() {
    $('#left-panel').toggleClass('left-panel-open')
  }

  addEventListeners(panel) {
    const checkbox = panel.querySelector('input#night-mode');
    this.checkbox = checkbox 
    checkbox.addEventListener('change', this.handleNightMode.bind(this))
    return panel
  }

  handleNightMode() {
    if(this.checkbox.checked)
     {
       document.documentElement.style.filter = "invert(1) hue-rotate(210deg)";
     } else {
       document.documentElement.style.filter = "";
     }
   }

  renderPanel () {
    const panel = this.createPanel();
    document.getElementById('app').appendChild(panel);
  }

}
