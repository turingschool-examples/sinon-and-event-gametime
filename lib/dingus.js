function Dingus(options){
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.canvas = options.canvas;
}

Dingus.prototype.draw = function(dingus){
  dingus.canvas.fillStyle = "#FF0000";
  dingus.canvas.fillRect(dingus.x, dingus.y, dingus.width, dingus.height);
}

module.exports = Dingus;
