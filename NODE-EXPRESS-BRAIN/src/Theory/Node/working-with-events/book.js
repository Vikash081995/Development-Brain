var util=require('util');
var events = require('events');
var Class =function(){};
util.inherits(Class,events.EventEmitter);

Class.prototype.ratePoints=0
Class.prototype.rate=function(points){
  this.ratePoints=points
  this.emit('rated')
}

Class.prototype.getPoints=function(){
  return this.ratePoints;
}

module.exports = Class;
