class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addAmount.bind(this));
        view.on('edit', this.editAmount.bind(this));
        view.on('remove', this.removeAmount.bind(this));

        view.show(model.items);
    }


    addAmount(record) {
        const item = this.model.addItem({
            id: Date.now(),
            ...record
        });

        this.view.addItem(item);
    }


    editAmount({ id, amount }) {
        const item = this.model.updateItem(id, { amount });
        console.log(item);
        this.view.editItem(item);
    }

    removeAmount(id) {
        this.model.removeItem(id);
        this.view.removeItem(id);
    }
}

export default Controller;
