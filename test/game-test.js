const chai = require('chai');
const assert = chai.assert;

const Game = require('../lib/game')

describe('Game', function () {
  it('should allow a user to add a playfield', function () {
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d');
    var game = new Game(canvas, ctx);
    assert(game.canvas === canvas);
    assert(game.ctx === ctx);
  });
});
