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

{
    let i = prompt("What is your name?");
    let LENGTH_OF_I = i.length;

    for (let x = 0; x < 10 - LENGTH_OF_I; x++){
        i = "+" + i;
    }
    console.log(i)
}