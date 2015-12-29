var chai = require( 'chai' );
var mocha = require( 'mocha' );
var expect = chai.expect;
var bubbleModule = require( './../public/js/bubble-sort.js' );

chai.should();

describe( 'bubbleSort', function() {


  it( 'should exist', function() {
    expect( bubbleModule.bubbleSort ).to.exist;
    expect( bubbleModule.bubbleSort ).to.be.a( 'function' );
  });

  it( 'should return a number', function() {
    var result = bubbleModule.bubbleSort( [ 50, 2, 1, 4, 5 ] );

    expect( result ).to.be.a( 'number' );
    expect( result ).to.be.equal( 5 );
  });

  //should test for inputs that are not arrays









});