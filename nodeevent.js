const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('watterfall', () => {
    console.log('Please turn off motor');

    setTimeout(() => {
     console.log('Please turn off motor | its required');
        
    }, 3000);
    
});

console.log('This event is runing')

myEmitter.emit('watterfall');