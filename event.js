var event = require('events').EventEmitter;
var util = require('util');
var Person = function(name){
	this.name = name;
};
util.inherits(Person,event)
var gagan = new Person("Gaganjeet")
gagan.on('speak',function(said){
	console.log(said)
});
gagan.emit('speak',"Roger Federer is great");
process.exit();