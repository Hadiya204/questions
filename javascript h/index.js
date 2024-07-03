function currentdatetime(){
    let d = new Date();
    document.write(d)
}
currentdatetime();
//q2
let firstname = prompt("enter first name");
let lastname =  prompt("enter your last name");
function greets(firstname,lastname){
    document.write(" welcome " + " " + firstname + " " + lastname);
}
greets(firstname,lastname)
 //q3
 let x = +prompt("enter a num");
 let y = +prompt("enter a num");
 function sum (x,y){
    return x + y;
 }
 console.log(sum(x,y));
 //q4
let num1 = +prompt("");
let num2 = +prompt("");
let operator = prompt("");
function calculator(num1 , num2 , operator){
    if(operator === "+"){
        document.write( num1 + " " + operator + " " +num2 + " " + " = " + " " + (num1 + num2));
    }
    else if(operator === "-"){
        document.write( num1 + " " + operator + " " +num2 + " " + " = " + " " + (num1 - num2));
    }
    else if(operator === "*"){
        document.write( num1  + "  " + operator + " " +num2 + " " + " = " + " " + (num1 - num2));
    }
}
calculator(num1 , num2 , operator);
//q5
function sqaure(num){
    return num * num
}
console.log(sqaure(4));
//q9
function areaofrectangle(width , height){
    return " area of rectangle is : " + width * height
}
console.log(areaofrectangle(6,8));
console.log(areaofrectangle(9 , 6));
//q14
function circumference(radius){
    return " circumference is : " + " " + 2*3.41*radius
}
console.log(circumference(7 , 8));
console.log( circumference (6 , 7));
 
function area(radius){
    return " the area is " + " " + 3.41 *2 + radius
}
console.log(area(9 , 3));
console.log(area(8 , 6));
//q7
let start_number = +prompt("Enter a start number");
let end_number = +prompt("Enter a end number");
function count(start_number, end_number){
    if(start_number > end_number){
        for(let i = start_number; i>end_number; i--)
            document.write(i + "<br>")
        
    }
    else if(start_number <= end_number){
        for(let i = start_number; i<=end_number; i++)
            document.write(i + "<br>")
    }
    else if(start_number === end_number){
        document.write("both are equal")
    }
}
count(start_number,end_number);




