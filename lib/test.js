'use strict';

var _Vehicle = require('./Vehicle');

var _Vehicle2 = _interopRequireDefault(_Vehicle);

var _Toyota = require('./Toyota');

var _Toyota2 = _interopRequireDefault(_Toyota);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vehicle = new _Vehicle2.default();
var camry = new _Vehicle2.default();
console.log(vehicle.getColor());
console.log(camry.setGear(3));
console.log(camry.getGear());