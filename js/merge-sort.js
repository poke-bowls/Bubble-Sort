var mergeModule = module.exports = function() {

  //private

  mergeSort = function( input ) {

    if( Array.isArray( input ) === false ) {
      throw new TypeError ( 'Input must be an array!' );
    }

    if( input.length < 2 ) {
      return input;
    }

    var middle = Math.round( input.length / 2 );

    var valueL = mergeSort(input.slice( 0, middle ));
    var valueR = mergeSort(input.slice( middle ));

    return merge( valueL, valueR );
  };

  merge = function( left, right ) {
    var result = [];

    while( left.length !== 0 && right.length !== 0 ) {
      if ( left[0] < right[0] ) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    if( left.length > 0 && right.length === 0 ) {
      result.concat( left );
    } else {
      result.concat( right );
    }
  };

  //public
  return{
    merge: merge,
    mergeSort: mergeSort
  };
}();