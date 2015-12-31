# Sorting-Algorithms

Quick sort:
  i.  We split a group up into two teams, making the person in the middle the referee.  Once we have teams, we give each player a position on the team based on their size.  Players are then given numbered jerseys; the smallest player gets the jersey with the lowest number and the largest player the opposite.  The two teams, with the referee in the middle, then meet together again as a group to play the game.

  ii.  function quickSort( an array )
         declare left and right variables and initialize each as empty arrays

         if the input to the function is not an array, throw an error

         find the value at the middle index of the array and save it to a variable called pivot

         iterate through the values of the array, pushing values into 'left' or 'right' if the values are less than or greater than the pivot

         once the array length is less than or equal to 1, return the array
         else recursively sort the left and right arrays and concat the result left to right with the pivot point between

  iii.   O( log N ) Overall the performance of this algorithm is efficient due to the number of operations ( N ) being split in half each instance

        Best:  The best, or least expensive scenario would occur when the algorithm has.

        Worst:  The worst, or most expensive scenario would occur when the algorithm has to perform the operation for an input that has the smallest or biggest value in the array at each middle index.

Bubble sort:
  i.  We take a group of people and have them stand in a single-file line.  Starting from one end, we compare the first person with the next person in line.  If the next person in line is shorter, those two people switch places in line.  After they switch, we start from the beginning of the line again and do the same thing until the single-file line is ordered from shortest to tallest.

  ii.  function bubbleSort( an array )
         declare a variable called moves and initialize it at 0

         if the input to the function is not an array, throw an error

         iterate through the values of the array

         compare the values of the arrays to each other two at a time

         if the value at index[ i ] is greater than the value at the next index[ i + 1 ], splice index[i] off the array and add it back to the array at index[ i + 1 ], incrementing moves up by one

         call the function recursively by returning it

  iii.
        Best:  The best/least expensive scenario would occur when the algorithm has to perform the least amount of sorting.  With an input that is already sorted before being passed through the algorithm, bubble sort does the minimal performance of just iterating over the array and returning it.

        Worst:  The worst/most expensive scenario would occur when the algorithm has to perform the operation for an input that is sorted from greatest to least ( the opposite of what our sort function does ), making it more labor intensive for the operation to complete.


Merge sort:
  i.

  ii.

  iii.