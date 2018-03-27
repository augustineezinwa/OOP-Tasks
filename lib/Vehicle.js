'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function () {
    function Vehicle() {
        var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'blue';
        var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var gear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, Vehicle);

        this.defaultColor = color;
        this.defaultSpeed = speed;
        this.defaultGear = gear;
    }

    _createClass(Vehicle, [{
        key: 'setSpeed',
        value: function setSpeed(speed) {
            this.defaultSpeed = speed;
        }
    }, {
        key: 'setColor',
        value: function setColor(color) {
            this.defaultColor = color;
        }
    }, {
        key: 'setGear',
        value: function setGear(gear) {
            this.defaultGear = gear;
        }
    }, {
        key: 'getSpeed',
        value: function getSpeed() {
            return this.defaultSpeed;
        }
    }, {
        key: 'getColor',
        value: function getColor() {
            return this.defaultColor;
        }
    }, {
        key: 'getGear',
        value: function getGear() {
            return this.defaultGear;
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
                return 'Vehicle of color ' + this.defaultColor + ' is moving fast';
            }
        }
    }]);

    return Vehicle;
}();

exports.default = Vehicle;