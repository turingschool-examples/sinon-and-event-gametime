var util = require('util');
var EventEmitter = require('events');

const Dingus = require('./dingus');

function Game(canvas, ctx){
  EventEmitter.call(this);
  this.canvas = canvas;
  this.ctx = ctx;
  this.dingus = new Dingus({
    canvas: ctx
  });
}

util.inherits(Game, EventEmitter);

Game.prototype.draw = function(game){
  game.dingus.draw();
  game.dingus.scoot();
  if((game.dingus.x + game.dingus.width) === game.canvas.width){
    this.emit('collision', game.dingus.x);
  }
}

module.exports = Game;
