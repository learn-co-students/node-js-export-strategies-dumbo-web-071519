const Lamp = require('./lamp');
const power = require('./power');

const myLamp = new Lamp(10);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);

power.surge(myLamp);
power.outage(myLamp);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);