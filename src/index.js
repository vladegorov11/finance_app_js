import Model from './models/model';
import View from './views/view';
import BalanceView from './views/balanceView';
import Controller from './controllers/controller';
import BalanceController from './controllers/balanceController';
import ChartController from './controllers/chartController';
import ChartView from './views/chartView';
import { save, load } from './store/store';

const store = load();

const model = new Model(store || undefined);
model.on('change', store => save(store));

$( function() {
    $( "#add-input-date" ).datepicker();
  } );

const view = new View();
const chartView = new ChartView();
const balanceView = new BalanceView();
const controller = new Controller(model, view);
const balanceController = new BalanceController(model, balanceView);
const chartController = new ChartController(model, chartView);
