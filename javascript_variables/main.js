/*const UserName= prompt("Enter User Name : ");


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
//var resultS;
const subtraction = (firstNumber, secondNumber) =>{
  const result = firstNumber - secondNumber ;
  return result;
}
let resultS;


const main =() => {
  const Password = prompt("Enter Your Password:");
  const num1 = parseInt( prompt("First number"));
  if (isNaN(num1)){
    alert(`This is invalid number : ${num1}`);
    return
  }
  const num2 = parseInt(prompt("Enter second number:"));

  if (isNaN(num2)){
    alert(`This is invalid number : ${num2}`);
    return
  }
  const operator = prompt("Enter Operator: ")

  if(operator == '+'){
    resultS = sum(num1, num2);
    
  }
  else if(operator == '-'){
    resultS = subtraction(num1, num2);
    
  }
  else if(operator == '*'){
    resultS = multiply(num1, num2);
    
  }
  else if(operator == '/'){
    resultS = division(num1, num2);
    
  }
  else{
      alert(`This is invalid operator : ${operator}`);
      return
  }
  //document.writeln(resultS)
  document.write(`${num1} ${operator} ${num2} = ${resultS}`)
  

}

main();

