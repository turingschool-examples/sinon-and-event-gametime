const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon/pkg/sinon');

const Dingus = require('../lib/dingus')

describe('Dingus', function() {
  context('with default attributes', function() {
    var dingus = new Dingus({});
    it('should assign an x coordinate', function() {
      assert.equal(dingus.x, 0);
    });
    it('should assign a y coordinate', function() {
      assert.equal(dingus.y, 0);
    });
    it('should assign a height', function(){
      assert.equal(dingus.height, 10);
    });
    it('should assign a width', function(){
      assert.equal(dingus.width, 10);
    });
  });
  describe('draw()', function() {
    it('should draw itself on the canvas', function(){
      var ctx = { fillRect: function(){} };
      var spy = sinon.spy(ctx, "fillRect");

      var options = {canvas: ctx, x: 0, y: 0, height: 20, width: 10}

      var dingus = new Dingus(options);

      dingus.draw(dingus);

      assert(spy.calledOnce, 'fillRect method was called on canvas context')
      assert(spy.calledWith(0, 0, 10, 20), 'fillRect method was called with unexpected args')
    });
  });
});
