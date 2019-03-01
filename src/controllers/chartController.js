class ChartController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        view.on('chartCreate', this.createChart.bind(this));
    }

    createChart() {
      const items = this.model.items
      this.view.renderChart(items);
    }

}

export default ChartController;
