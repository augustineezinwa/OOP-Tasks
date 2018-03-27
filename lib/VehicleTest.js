'use strict';

var _Vehicle = require('./Vehicle');

var _Vehicle2 = _interopRequireDefault(_Vehicle);

var _Toyota = require('./Toyota');

var _Toyota2 = _interopRequireDefault(_Toyota);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should();
var vehicle = new _Vehicle2.default('green', 50, 4);
var camry = new _Toyota2.default('red', 25, 2, 'camry', 'vuuuuum!');

describe('test to check object vehicle, an Instance of Vehicle', function () {
    it('check to see if vehicle is an instance of Vehicle', function () {
        vehicle.should.be.instanceof(_Vehicle2.default);
    });
    it('check to see if color of vehicle is green', function () {
        vehicle.getColor().should.be.eql('green');
    });
    it('check to see if speed of vehicle is 50', function () {
        vehicle.getSpeed().should.be.eql(50);
    });
    it('check to see if current gear of vehicle is 4', function () {
        vehicle.getGear().should.be.eql(4);
    });
    it('testing method getGear() of object vehicle', function () {
        vehicle.getGear().should.be.eql(4);
    });
    it('testing method getSpeed() of object vehicle', function () {
        vehicle.getSpeed().should.be.eql(50);
    });
    it('testing method getColor() of object vehicle', function () {
        vehicle.getColor().should.be.eql('green');
    });
    it('testing method isMoving() of object vehicle', function () {
        vehicle.isMoving().should.be.eql(true);
    });
});
describe('test to test object camry, an Instance of Vehicle', function () {
    it('check to see if camry is an instance of Vehicle', function () {
        camry.should.be.instanceof(_Vehicle2.default);
    });
    it('check to see if camry inherits the setSpeed(speed) method of super class Vehicle', function () {
        camry.setSpeed(20);
        camry.getSpeed().should.be.eql(20);
    });
    it('check to see getModel() method of sub class camry', function () {
        camry.getModel().should.be.eql('camry');
    });
    it('checking for polymorphism on camry', function () {
        camry.isMoving().should.be.eql(true);
        vehicle.isMoving().should.be.eql(true);
        vehicle.getMotionMessage().should.be.eql('Vehicle of color ' + vehicle.getColor() + ' is moving fast');
        camry.getMotionMessage().should.be.eql('My vehicle ' + camry.getModel() + ' is moving so fast!');
    });
    it('checking for getSound in camry', function () {
        camry.getSound().should.be.eql('vuuuuum!');
    });
});