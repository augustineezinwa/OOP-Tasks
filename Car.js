class Vehicle {
    constructor(color, speed, gear) {
        this.color = color;
        this.speed = speed;
        this.gear = gear;
    }

    setSpeed(speed) {
        this.speed = speed;
        return(`My current speed is ${this.speed}`);
    }
    setColor(color) {
        this.color = color;
        return(`My current color is ${this.color}`);
    }
    setGear(gear) {
        this.gear = gear;
        return(`My current speed is ${gear}`);
    }
    getSpeed() {
        return(`My current speed is ${this.speed}`);
    }
    getColor() {
        return(`My current color is ${this.color}`);
    }
    getGear() {
        return(`My current gear is ${this.gear}`);
    }
    isMoving() {
        if(this.speed > 0) {
            return(`vehicle is moving`);
        } else {
            return(`vehicle stopped!`);
        }
    }
}

class Toyota extends Vehicle {
    constructor(color, speed, gear, model, sound) {
        super(color, speed, gear);
        this.model = model;
        this.sound = sound;
    }

    getModel() {
    return `My vehicle name is ${this.model}`
    }
    getSound() {
        return `My vehicle ${this.model} sounds this way ${this.sound}`
    }
    isMoving() {
        return `My vehicle ${this.model} is speedy`
    }
}

export {Toyota, Vehicle};