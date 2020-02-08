const Lamp = require('./lamp')
const powerEvents = require('./power');


const myLamp = new Lamp(10)

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);

powerEvents.surge(myLamp);
powerEvents.outage(myLamp);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);
