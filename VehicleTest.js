import Vehicle from './Vehicle';
import Toyota from './Toyota';
import chai from 'chai';

const should = chai.should();
const vehicle = new Vehicle('green', 50, 4);
const camry = new Toyota('red', 25, 2,'camry','vuuuuum!');

describe('test to check object vehicle, an Instance of Vehicle', () => {
    it('check to see if vehicle is an instance of Vehicle', () => { 
        vehicle.should.be.instanceof(Vehicle);
    })   
    it('check to see if color of vehicle is green', () => {
        vehicle.getColor().should.be.eql('green');
    })
    it('check to see if speed of vehicle is 50', () => {
        vehicle.getSpeed().should.be.eql(50);
    })
    it('check to see if current gear of vehicle is 4', () => {
        vehicle.getGear().should.be.eql(4);
    })
    it('testing method getGear() of object vehicle', () => {
        vehicle.getGear().should.be.eql(4);
    })
    it('testing method getSpeed() of object vehicle', () => {
        vehicle.getSpeed().should.be.eql(50);
    })
    it('testing method getColor() of object vehicle', () => {
        vehicle.getColor().should.be.eql('green');
    })
    it('testing method isMoving() of object vehicle', () => {
        vehicle.isMoving().should.be.eql(true);
    })
});
describe('test to test object camry, an Instance of Vehicle', () => {
    it('check to see if camry is an instance of Vehicle', () => { 
        camry.should.be.instanceof(Vehicle);
    });
    it('check to see if camry inherits the setSpeed(speed) method of super class Vehicle', ()=>{
        camry.setSpeed(20);
        camry.getSpeed().should.be.eql(20);
    })  
    it('check to see getModel() method of sub class camry', () => {
        camry.getModel().should.be.eql('camry');
    })
    it('checking for polymorphism on camry', () => {
        camry.isMoving().should.be.eql(true)
        vehicle.isMoving().should.be.eql(true);
        vehicle.getMotionMessage().should.be.eql(`Vehicle of color ${vehicle.getColor()} is moving fast`);
        camry.getMotionMessage().should.be.eql(`My vehicle ${camry.getModel()} is moving so fast!`);
    })
    it('checking for getSound in camry', () => {
        camry.getSound().should.be.eql('vuuuuum!');
    })
});