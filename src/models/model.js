import { EventEmitter } from '../helpers/helpers';

class Model extends EventEmitter {
    constructor(items = []) {
        super();

        this.items = items;
        console.log(this.items);
    }

    getItem(id) {
        return this.items.find(item => item.id == id);
    }

    addItem(item) {
        this.items.push(item);
        this.emit('change', this.items);
        this.emit('calculation', this.items)
        return item;
    }

    updateItem(id, data) {
        const item = this.getItem(id);
        console.log(data);
        Object.keys(data).forEach(prop => {
          item[prop] = data[prop]
        });

        this.emit('change', this.items);
        this.emit('calculation', this.items)
        return item;
    }

    removeItem(id) {
        const index = this.items.findIndex(item => item.id == id);

        if (index > -1) {
            this.items.splice(index, 1);
            this.emit('change', this.items);
            this.emit('calculation', this.items)
        }
    }
}

export default Model;
