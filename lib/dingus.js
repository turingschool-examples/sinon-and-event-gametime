function Dingus(options){
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.canvas = options.canvas;
}

Dingus.prototype.draw = function(){
  this.canvas.fillStyle = "#FF0000";
  this.canvas.fillRect(this.x, this.y, this.width, this.height);
}

Dingus.prototype.scoot = function(){
  this.x = this.x + 1;
}

module.exports = Dingus;
