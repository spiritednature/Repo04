function main(numOne, numTwo){
    var numOne;
    var numTwo;
    var quotient;
    if(numTwo === 0){
        quotient = 'Divide by 0! Cannot divide by zero!';
    } else {
        // only change code below this line
        quotient = numOne / numTwo; 
        // only change code below this line
    }

    return quotient;

}

console.log(main(15, 3));  // change this line
module.exports = main;