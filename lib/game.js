const Dingus = require('./dingus');

function Game(canvas, ctx){
  this.canvas = canvas;
  this.ctx = ctx;
}

Game.prototype.draw = function(game){
  // var dingus = new Dingus({canvas: game.ctx});
  // dingus.draw(dingus);
}.bind(this)

module.exports = Game;
