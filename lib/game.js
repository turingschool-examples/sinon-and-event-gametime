function Game(canvas, ctx){
  this.canvas = canvas;
  this.ctx = ctx;
}

Game.prototype.draw = function(game){
  game.canvas.fillStyle = "#FF0000";
  game.canvas.fillRect(0,0,150,75);
}.bind(this)

module.exports = Game;
