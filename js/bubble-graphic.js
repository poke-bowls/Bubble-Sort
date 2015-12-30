//visually show the array and it's values
//graphically represent the sorting action to see real-time movement
//seeing sorting in real-time is impossible, so figure it out. Thanks.

var myArray = [ 1231, 5, 32, 6, 1, 23, 7, 323, 1, 2 ];
window.onload = function() {
  function graphBubbles( input ) {

    for( var j = 0; j < input.length; j++ ) {

      var $newDiv = $('<div/>');
        $newDiv.attr( 'id', 'index' + j );
        $newDiv.attr( 'class', 'bubble' );

      var value = '<p>' + input[j] + '</p>';


      $( container ).append( $newDiv );
      $( '#index' + j ).append( value );
      bubbleModule.bubbleSort( myArray );
    }

  }
  graphBubbles( myArray );
};