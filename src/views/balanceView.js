import { EventEmitter, calculationHelper } from '../helpers/helpers';

class BalanceView extends EventEmitter  {
  constructor() {
    super();

    this.balance = document.getElementById('balance')
    this.income = document.getElementById('income')
    this.expense = document.getElementById('expense')
  }

  show(amounts) {
    const result  = calculationHelper(amounts)
    console.log(result);
    this.balance.innerText = '+' + result.balance
    this.income.textContent = '+' + result.income
    this.expense.textContent =  '-' + result.expense
  }

}

export default BalanceView;
