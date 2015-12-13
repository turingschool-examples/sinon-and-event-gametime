'use strict';
const Game = require('./game.js')
const $ = require('jquery');

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let game = new Game(canvas, ctx);

game.on('collision', function(location){
  $('canvas').replaceWith('<h1>Boom</h1>');
});

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.draw(game);
  requestAnimationFrame(gameLoop);
});
