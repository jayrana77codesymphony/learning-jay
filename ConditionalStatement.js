const prompt = require('prompt-sync')({ sigint: true });

const number1 = prompt("Enter Number to Check if it even or odd : ");
if(number1%2==0)
console.log("Number is even");
else
console.log("Number is odd");

const num1 = prompt("Enter Number 1: ");
const num2 = prompt("Enter Number 2 : ");
const num3 = prompt("Enter Number 3 : ");
if(num1 > num2 && num1 > num3){
    console.log(`${num1} is bigger`);
}
else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is bigger`);
}
else{
    console.log(`${num3} is bigger`);
}

// ********************** nested if ******************888
let a=5;
if(a>0){
    if(a>=5){
        for(let i=1;i<=5;i++){
            console.log(i);
        }
    }
}