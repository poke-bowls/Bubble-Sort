var chai = require( 'chai' );
var mocha = require( 'mocha' );
var expect = chai.expect;
var bubbleSort = require( './../js/bubble-sort.js' );

chai.should();

describe( 'bubbleSort', function() {
  it( 'should exist', function() {
    expect( bubbleSort ).to.exist;
    expect( bubbleSort ).to.be.a( 'function' );
  });

  it( 'should return a number', function() {
    var input = [ 1, 3, 2 ];
    var result = bubbleSort( input );

    expect( result ).to.be.equal(  );

  });
});