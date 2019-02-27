class BalanceController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        model.on('calculation', this.updateBalance.bind(this));
        view.show(model.items);
    }

    updateBalance(items) {
      this.view.show(items);
    }

}

export default BalanceController;
