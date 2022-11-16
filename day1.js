//Question 1

//doubl equals(==) checks for only value while triple equals(===) checks for both value and type.

console.log('77'==77);
console.log('77'===77);

//Question 2

//let x = 11;
let x = 12;

if((x>=10 && x%2==0)||(x<10 && x%2!=0)){
    console.log('True');
}else{
    console.log('False');
}

//Question 3

//let y = 3;
let y = 4;
var output;

y%2===0?output='even':output='odd';
console.log(output);

//Question 4

//let z = 11;
let z = 5;

if(z==1){
    console.log('Sunday');
}else if(z==2){
    console.log('Monday');
}else if(z==3){
    console.log('Tuesday');
}else if(z==4){
    console.log('Wednesday');
}else if(z==5){
    console.log('Thursday');
}else if(z==6){
    console.log('Friday');
}else if(z==7){
    console.log('Saturday');
}else{
    console.log('Invalid Number');
}

//Question 5

switch(z){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid Number');
        break;
}


//Question 1

/*The first and most important difference between function declaration and function expressions is that
 function declaration allows hoisting which means you can call the function before even creating it , while in function expressions this is not possible.
 Another important difference comes in syntax.*/

 //function declaration

 function greetWorld(){
    console.log('Hello World');
 }

 //function expression

 const greetWorld1 = function(){
    console.log('Hello World');
 }

 //Question 2

 /* Syntax rules of Arrow functions are as follows:
   1 . If a single argument is passed to a function then we need not put it in curly brackets.
   2 . If there is only one line execution and returning for a function then you need not put the execution part in flower braces ,
      you can just write the return value of the function in the same line because JS provides implicit return function for us.
   3 . Arrow functiom syntax is "=>".*/

//Question 3

function addition(a,b){
    return a+b;
}

console.log(addition(5,4));

//Question 4

const multiplication = function(a,b){
    return a*b;
}

console.log(multiplication(5,4));

//Question 5

const subtraction = (a,b)=>a-b;

console.log(subtraction(5,4));


//Question 6

//IIFE stands for Immediately Invoked Functional Expressions

console.log((function(tmp){
    var ans = '';
    for(let i=tmp.length-1;i>=0;i--){
        ans+=tmp[i];
    }
    return ans;
})('sameer'));







