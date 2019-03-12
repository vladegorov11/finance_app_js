import { EventEmitter, createElement } from '../helpers/helpers';
import { validationForm } from '../helpers/validationHelper';

class View extends EventEmitter {
    constructor() {
        super();

        this.form = document.getElementById('amount-form');
        this.inputAmount = document.getElementById('add-input-amount');
        this.inputDate = document.getElementById('add-input-date');
        this.inputBody = document.getElementById('add-input-body');
        this.inputType= document.getElementById('add-input-type');
        this.incomeList = document.getElementById('income-list');
        this.expenseList = document.getElementById('expense-list');
        this.form.addEventListener('submit', this.handleAdd.bind(this));
    }

    createListItem(amount) {
        const typeLabel = createElement('label', { className: 'type' }, amount.type);
        const label = createElement('label', { className: 'title' },  amount.amount);
        const editInput = createElement('input', { type: 'text', className: 'textfield input' });
        const editButton = createElement('button', { className: 'edit button  is-warning is-small is-pulled-right' }, 'Edit');
        const deleteButton = createElement('button', { className: 'remove button  is-danger is-small is-pulled-right' }, 'Remove');
        const description = createElement('p', { className: '' }, amount.body);
        const date = createElement('p', { className: 'is-pulled-right' }, amount.date);
        const item = createElement('li', { className: `item-list is-clearfix`, 'data-id': amount.id }, typeLabel, label, editInput, editButton, deleteButton, description, date);

        return this.addEventListeners(item);
    }

    addEventListeners(item) {
        const editButton = item.querySelector('button.edit');
        const removeButton = item.querySelector('button.remove');

        editButton.addEventListener('click', this.handleEdit.bind(this));
        removeButton.addEventListener('click', this.handleRemove.bind(this));

        return item;
    }

    findListItem(id) {

      return document.querySelector(`[data-id="${id}"]`);
    }

    handleAdd(event) {
        event.preventDefault();
        console.log(this.inputType.options[this.inputType.selectedIndex].value);

        const value = {
          date: this.inputDate.value,
          amount: this.inputAmount.value,
          type: this.inputType.options[this.inputType.selectedIndex].value,
          body: this.inputBody.value
        }
        if (validationForm(this) ) {
          this.emit('add', value);
        }
    }


    handleEdit({ target }) {
        const listItem = target.parentNode;
        const id = listItem.getAttribute('data-id');
        const label = listItem.querySelector('.title');
        const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('button.edit');
        const amount = input.value;
        const isEditing = listItem.classList.contains('editing');
        if (isEditing) {
            this.emit('edit', { id, amount });
        } else {
            input.value = label.textContent;
            editButton.textContent = 'Save';
            listItem.classList.add('editing');
        }
    }

    handleRemove({ target }) {
        const listItem = target.parentNode;

        this.emit('remove', listItem.getAttribute('data-id'));
    }

    show(amounts) {
        amounts.forEach(amount => {
            const listItem = this.createListItem(amount);
            if (amount.type == '+') {
              this.incomeList.appendChild(listItem);
            } else if (amount.type == '-')  {
              this.expenseList.appendChild(listItem);
            }
        });
    }

    addItem(amount) {
        const listItem = this.createListItem(amount);
        this.clearInput();
        if (amount.type == '+') {
          this.incomeList.appendChild(listItem);
        } else if (amount.type == '-')  {
          this.expenseList.appendChild(listItem);
        }
    }

    clearInput() {
      this.inputAmount.value = '';
      this.inputDate.value = '';
      this.inputBody.value = '';
    }

    editItem(amount) {
        const listItem = this.findListItem(amount.id);
        const label = listItem.querySelector('.title');
        const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('button.edit');

        label.textContent = amount.amount;
        editButton.textContent = 'Edit';
        listItem.classList.remove('editing');
    }

    removeItem(id) {
        const listItem = this.findListItem(id);
        document.querySelector(`[data-id="${id}"]`).parentElement.removeChild(listItem);
    }
}
export default View;
