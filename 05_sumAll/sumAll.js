const sumAll = function(num1,num2) {
   let sum = 0;
   let small = num1;
   let big = num2;

   if (num1 > num2) {
    big = num1;
    small = num2;
   }
   
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) ||
    !Number.isInteger(num2) || typeof num1 !== "number" ||
    typeof num2 !== "number" ) {
    return "ERROR";
   } else {
    for (i = small ; i <= big; i++)
     sum += i;
   }  
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
