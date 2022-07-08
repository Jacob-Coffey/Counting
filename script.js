for(i = 1; i <= 10; i++){
    console.log(i)
}
console.log("-----------For loop ^^^^");
for(i = 10; i >= 1; i--){
    console.log(i)
}
console.log("-----------For loop ^^^^");

{
let i = 0;
while (i < 10){
    i++;
    console.log(i);
    }
}
console.log("-----------While loop ^^^^");
{
    let i = 11;
    while (i > 1){
    i--;
    console.log(i)
    }
}
console.log("-----------While loop^^^^");

{
    let i = 0;
    do{
        i++;
        console.log(i);
    }
    while(i < 10);   
}
console.log("-----------Do...While loop^^^^^");
{
    let i = 11;
    do{
        i--;
        console.log(i);
    }
    while(i > 1);  
}
console.log("-----------Do...While loop^^^^^");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers){
    console.log(number);
}
console.log("-----------For....Of loop^^^^^");


//***Extended challenge*** will come back to this. I found one possible solution
//which requries a function and since we have not went over that I do not want 
//to confuse myself and make it more difficult to learn when we g over it in class
{
    let i = prompt("What is your name?");
    let num1 = i.length;
    let x = num1;

    do{
        x++;
        console.log(i);
    }
    while( x < 10)
}