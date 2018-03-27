import Vehicle from './Vehicle';

class Toyota extends Vehicle {
    constructor(color, speed, gear, model = 'Toyota', sound = 'shhhhm') {
        super(color, speed, gear);
        this.defaultModel = model;
        this.defaultSound = sound;
    }

    getModel() {
    return(this.defaultModel);
    }
    getSound() {
        return(this.defaultSound);
    }
    isMoving() {
        if(this.defaultSpeed > 0) {
            return true;
        } else {
            return false;
        }
    }
    getMotionMessage() {
        if(this.defaultSpeed > 0) {
            return `My vehicle ${this.defaultModel} is moving so fast!`
        } else {
            return `My vehicle ${this.defaultModel} stopped!`
        }
    }
}

export default Toyota;
