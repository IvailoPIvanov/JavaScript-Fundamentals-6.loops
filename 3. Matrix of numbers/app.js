

function solve(args) {

    for(var i = 1; i <= args ; i ++){

        var r = "";

        for(var j = 1; j <= args ; j ++){

            r +=(i + j - 1) + " ";
        }
        console.log(r);
    }

}

solve('10');


/* Matrix of Numbers
 Description

 Write a javascript function that prints a matrix like in the examples below by a given integer N. Use two nested loops.

 Challenge: achieve the same effect without nested loops.

 Input

 The input array will contain a single number as string, the integer N.

 Output

 See the examples.

 Constraints

 1 <= N <= 20
 N will always be a valid integer number
 Time limit: 0.2s
 Memory limit: 32MB

 Sample tests
 Sample test 1
 Input

 ['2']

 Output

 1 2
 2 3

 Sample test 2
 Input

 ['3']

 Output

 1 2 3
 2 3 4
 3 4 5

 Sample test 3
 Input

 ['4']

 Output

 1 2 3 4
 2 3 4 5
 3 4 5 6
 4 5 6 7
 */