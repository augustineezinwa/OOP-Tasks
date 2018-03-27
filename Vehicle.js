class Vehicle {
    constructor(color = 'blue', speed = 0, gear = 0) {
       this.defaultColor = color;
       this.defaultSpeed = speed;
       this.defaultGear = gear;
    }

    setSpeed(speed) {
        this.defaultSpeed = speed;
    }
    setColor(color) {
        this.defaultColor = color;
    }
    setGear(gear) {
        this.defaultGear = gear;
    }
    getSpeed() {
        return(this.defaultSpeed);
    }
    getColor() {
        return(this.defaultColor);
    }
    getGear() {
        return(this.defaultGear);
    }
    isMoving() {
        if(this.defaultSpeed > 0) {
            return(true);
        } else {
            return(false);
        }
    }
    getMotionMessage() {
        if(this.defaultSpeed > 0) {
            return `Vehicle of color ${this.defaultColor} is moving fast`
        }
    }
}

export default Vehicle;