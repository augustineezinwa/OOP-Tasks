import {Toyota, Vehicle} from './Car';
import chai from 'chai';

const should = chai.should();
const vehicle = new Vehicle('green', 50, 4);
const camry = new Toyota('red', 25, 2 ,'camry','vuuuuum!');

describe('test to check object vehicle, an Instance of Vehicle', () => {
    it('check to see if vehicle is an instance of Vehicle', () => { 
        vehicle.should.be.instanceof(Vehicle);
    })   
    it('check to see if color of vehicle is green', () => {
        vehicle.color.should.be.eql('green');
    })
    it('check to see if speed of vehicle is 50', () => {
        vehicle.speed.should.be.eql(50);
    })
    it('check to see if current gear of vehicle is 4', () => {
        vehicle.gear.should.be.eql(4);
    })
    it('testing method getGear() of object vehicle', () => {
        vehicle.getGear().should.be.eql('My current gear is 4');
    })
    it('testing method getSpeed() of object vehicle', () => {
        vehicle.getSpeed().should.be.eql('My current speed is 50');
    })
    it('testing method getColor() of object vehicle', () => {
        vehicle.getColor().should.be.eql('My current color is green');
    })
    it('testing method isMoving() of object vehicle', () => {
        vehicle.isMoving().should.be.eql('vehicle is moving');
    })
});
describe('test to test object camry, an Instance of Vehicle', () => {
    it('check to see if camry is an instance of Vehicle', () => { 
        camry.should.be.instanceof(Vehicle);
    });
    it('check to see if camry inherits the setSpeed(speed) method of super class Vehicle', ()=>{
        camry.setSpeed(20).should.be.eql('My current speed is 20');
        camry.getSpeed().should.be.eql('My current speed is 20')
    })  
    it('check to see getModel() method of sub class camry', ()=>{
        camry.getModel().should.be.eql('My vehicle name is camry');
    })
    it('checking for polymorphism on camry', () => {
        camry.isMoving().should.be.eql('My vehicle camry is speedy')
        vehicle.isMoving().should.be.eql('vehicle is moving');
    })
    it('checking for getSound in camry', () => {
        camry.getSound().should.be.eql('My vehicle camry sounds this way vuuuuum! ');
    })
});