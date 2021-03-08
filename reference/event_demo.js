const EventEmitter=require('events');

//create a class

class MyEmitter extends EventEmitter{}
 
// create object

const myEmitter=new MyEmitter();
myEmitter.on('event',()=>console.log('Event Fired'));
//Event listener
myEmitter.emit('event')