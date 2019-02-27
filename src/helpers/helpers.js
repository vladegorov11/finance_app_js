function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => {
        if (key.startsWith('data-')) {
            element.setAttribute(key, props[key]);
        } else {
            element[key] = props[key];
        }
    });

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
}

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
        console.log(this.events);
    }

    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].forEach(listener => listener(arg));
        }
    }
}

function calculationHelper(amounts) {
  let result = {balance: 0, income: 0, expense: 0}

  amounts.forEach(amount => {
    if (amount.type == '+') {
      result.income += +amount.amount
    } else if (amount.type == '-') {
      result.expense += +amount.amount
    }
  });

  result.balance = result.income - result.expense

  return result

}
export { createElement, EventEmitter, calculationHelper};
