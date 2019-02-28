import { EventEmitter } from '../helpers/helpers';
import  craeteChart  from '../helpers/chartHelper';

export default class ChartView extends EventEmitter {
  constructor() {
    super();
    this.isOpen = false;
    this.modalWondow = document.getElementById('modal')
    this.modalBtn = document.getElementById("BtnModal");
    this.closeModalBtn = document.getElementById("close");
    this.modalBtn.addEventListener("click", this.handleOpenModal.bind(this))
    this.closeModalBtn.addEventListener("click", this.closeModal.bind(this))
    this.ctx = document.getElementById("myChart").getContext('2d');
  }

  handleOpenModal() {
    this.modalWondow.style.display = "block";
    this.emit('chartCreate', '');
  }

  renderChart(items) {
    craeteChart(this.ctx, items);
  }

  closeModal() {
    this.modalWondow.style.display = "none";
  }
}
