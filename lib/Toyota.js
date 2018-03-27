'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vehicle2 = require('./Vehicle');

var _Vehicle3 = _interopRequireDefault(_Vehicle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toyota = function (_Vehicle) {
    _inherits(Toyota, _Vehicle);

    function Toyota(color, speed, gear) {
        var model = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Toyota';
        var sound = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'shhhhm';

        _classCallCheck(this, Toyota);

        var _this = _possibleConstructorReturn(this, (Toyota.__proto__ || Object.getPrototypeOf(Toyota)).call(this, color, speed, gear));

        _this.defaultModel = model;
        _this.defaultSound = sound;
        return _this;
    }

    _createClass(Toyota, [{
        key: 'getModel',
        value: function getModel() {
            return this.defaultModel;
        }
    }, {
        key: 'getSound',
        value: function getSound() {
            return this.defaultSound;
        }
    }, {
        key: 'isMoving',
        value: function isMoving() {
            if (this.defaultSpeed > 0) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'getMotionMessage',
        value: function getMotionMessage() {
            if (this.defaultSpeed > 0) {
                return 'My vehicle ' + this.defaultModel + ' is moving so fast!';
            } else {
                return 'My vehicle ' + this.defaultModel + ' stopped!';
            }
        }
    }]);

    return Toyota;
}(_Vehicle3.default);

exports.default = Toyota;