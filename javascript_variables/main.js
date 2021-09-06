/*const UserName= prompt("Enter User Name : ");
const Password = prompt("Enter Your Password:");*/
const num1 = parseInt( prompt("First number"));
const num2 = parseInt(prompt("Enter second number:"));


/*if (UserName == "ihamza494" &&  Password == "FASTflex2018")
{
  console.log("Welcome to Flex.")
  const sum = num1 + num2;
  console.log(sum);
}
else{
    console.log("Incorrect credentials.")
}

//var sum = num+num2;

//console.log(sum)*/

const sum = (firstNumber, secondNumber) =>{
  const result = firstNumber + secondNumber ;
  return result;
}

const multiply = (firstNumber, secondNumber) =>{
  const result = firstNumber * secondNumber ;
  return result;
}

const division = (firstNumber, secondNumber) =>{
  const result = firstNumber / secondNumber ;
  return result;
}

const subtraction = (firstNumber, secondNumber) =>{
  const result = firstNumber - secondNumber ;
  return result;
}

const resultS = sum(num1, num2);
const resultM = multiply(num1, num2);
const resultD = division(num1, num2);
const resultSub = subtraction(num1, num2);


console.log(resultS);

console.log(resultM);

console.log(resultD);

console.log(resultSub);

