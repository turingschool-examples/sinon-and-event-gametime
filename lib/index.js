'use strict';
const Game = require('./game.js')
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let game = new Game(canvas, ctx);

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.draw(game);
  requestAnimationFrame(gameLoop);
});
