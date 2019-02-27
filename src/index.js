import Model from './models/model';
import View from './views/view';
import BalanceView from './views/balanceView';
import Controller from './controllers/controller';
import BalanceController from './controllers/balanceController';
import { save, load } from './store/store';

const store = load();

const model = new Model(store || undefined);
model.on('change', store => save(store));


const view = new View();
const balanceView = new BalanceView();
const controller = new Controller(model, view);
const balanceController = new BalanceController(model, balanceView);
