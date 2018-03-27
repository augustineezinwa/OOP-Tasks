import Vehicle from './Vehicle';
import Toyota from './Toyota';

const vehicle = new Vehicle();
const camry = new Vehicle();
console.log(vehicle.getColor());
console.log(camry.setGear(3));
console.log(camry.getGear());