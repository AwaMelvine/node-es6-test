'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrders = undefined;

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _Order = require('../models/Order');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOrders = exports.getOrders = function getOrders(req, res) {
  return res.json(_Order.orders);
};
//# sourceMappingURL=orders.js.map