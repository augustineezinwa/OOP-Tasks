"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function () {
    function Vehicle(color, speed, gear) {
        _classCallCheck(this, Vehicle);

        this.color = color;
        this.speed = speed;
        this.gear = gear;
    }

    _createClass(Vehicle, [{
        key: "setSpeed",
        value: function setSpeed(speed) {
            this.speed = speed;
            return "My current speed is " + this.speed;
        }
    }, {
        key: "setColor",
        value: function setColor(color) {
            this.color = color;
            return "My current color is " + this.color;
        }
    }, {
        key: "setGear",
        value: function setGear(gear) {
            this.gear = gear;
            return "My current speed is " + gear;
        }
    }, {
        key: "getSpeed",
        value: function getSpeed() {
            return "My current speed is " + this.speed;
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return "My current color is " + this.color;
        }
    }, {
        key: "getGear",
        value: function getGear() {
            return "My current gear is " + this.gear;
        }
    }, {
        key: "isMoving",
        value: function isMoving() {
            if (this.speed > 0) {
                return "vehicle is moving";
            } else {
                return "vehicle stopped!";
            }
        }
    }]);

    return Vehicle;
}();

var Toyota = function (_Vehicle) {
    _inherits(Toyota, _Vehicle);

    function Toyota(color, speed, gear, model, sound) {
        _classCallCheck(this, Toyota);

        var _this = _possibleConstructorReturn(this, (Toyota.__proto__ || Object.getPrototypeOf(Toyota)).call(this, color, speed, gear));

        _this.model = model;
        _this.sound = sound;
        return _this;
    }

    _createClass(Toyota, [{
        key: "getModel",
        value: function getModel() {
            return "My vehicle name is " + this.model;
        }
    }, {
        key: "getSound",
        value: function getSound() {
            return "My vehicle " + this.model + " sounds this way " + this.sound;
        }
    }, {
        key: "isMoving",
        value: function isMoving() {
            return "My vehicle " + this.model + " is speedy";
        }
    }]);

    return Toyota;
}(Vehicle);

exports.Toyota = Toyota;
exports.Vehicle = Vehicle;