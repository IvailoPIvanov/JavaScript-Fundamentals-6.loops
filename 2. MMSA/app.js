//---- pass test but 0 points
//----good if you take 3 number :)



// function solve(args) {

//     var a = +args[0],
//         b = +args[1],
//         c = +args[2];

var a = 15,
    b = 17;
// c = 18;

var sum = a + b + c;
var avg = (a + b + c) / 3;

// For a
if (a > b && a > c){

    if (b < c){

        console.log('min='+b.toFixed(2));
        console.log('max='+a.toFixed(2));
        console.log('sum='+sum.toFixed(2));
        console.log('avg='+avg.toFixed(2));
    }
    else{

        console.log('min='+c.toFixed(2));
        console.log('max='+a.toFixed(2));
        console.log('sum='+sum.toFixed(2));
        console.log('avg='+avg.toFixed(2));
    }
}

//For b
else if (b > a && b > c){

    if (a < c){

        console.log('min='+a.toFixed(2));
        console.log('max='+b.toFixed(2));
        console.log('sum='+sum.toFixed(2));
        console.log('avg='+avg.toFixed(2));
    }
    else{

        console.log('min='+c.toFixed(2));
        console.log('max='+b.toFixed(2));
        console.log('sum='+sum.toFixed(2));
        console.log('avg='+avg.toFixed(2));
    }
}
//For c
else if (c > a && c > b){

    if (a < b){

        console.log('min='+a.toFixed(2));
        console.log('max='+c.toFixed(2));
        console.log('sum='+sum.toFixed(2));
        console.log('avg='+avg.toFixed(2));
    }
    else{

        console.log('min='+b.toFixed(2));
        console.log('max='+c.toFixed(2));
        console.log('sum='+sum.toFixed(2));
        console.log('avg='+avg.toFixed(2));
    }
}

//-----100%




function solve(args) {

    var min = +args[0],
        max = +args[0],
        sum = 0,
        avg = 0,
        len = args.length;



    for (var i = 0; i < len; i += 1) {

        if (+args[i] >= max) {

            max = +args[i];
        }

        if (+args[i] <= min) {

            min = +args[i];
        }

        sum += +args[i];

        avg = sum / len;



    }
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}

//}



/*MMSA (Min, Max, Sum, Average) of N Numbers
 Description

 Implement a javascript function that accepts an array of floating-point numbers as strings and returns the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point).
 Input

 The array that will be passed as a parameter to your function will contain the numbers of the sequence.

 Output

 You output must always consist of exactly 4 lines - the minimal element on the first line, the maximal on the second, the sum on the third and the average on the fourth, in the following format:

 min=3.00
 max=6.00
 sum=9.00
 avg=4.50

 Constraints

 1 <= N <= 1000
 All numbers will be valid floating-point numbers that will be in the range [-10000, 10000]
 Time limit: 0.2s
 Memory limit: 32MB

 Sample tests
 Sample test 1
 Input

 ['2', '5', '1']

 Output

 min=1.00
 max=5.00
 sum=8.00
 avg=2.67

 Sample test 2
 Input

 ['2', '-1', '4']

 Output

 min=-1.00
 max=4.00
 sum=5.00
 avg=1.67
