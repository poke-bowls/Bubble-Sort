var bubbleModule = module.exports = function() {
  //private
  var moves = 0;

  bubbleSort = function ( input ){
    if( Array.isArray( input ) === false ) {
      throw new TypeError ( 'Input must be an array!' );
    }

    //splice array and add the spliced value (which is in a new array)
    //to the original array at the index right after the one being
    //compared if it is greater than it
    //make directions more confusing

      for ( var i = 0; i < input.length; i++) {

        if ( input[i] > input[i + 1] ) {
          var toAdd = input.splice( i, 1 );

          input.splice(  i+1, 0, toAdd[0] );

          moves += 1;
          return bubbleSort( input );
        }
      }
      return moves;
    };

  //public
  return {
    bubbleSort: bubbleSort,
    moves: moves
  };
}();
