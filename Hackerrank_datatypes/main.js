const firstOutput = (x,y)=>{
 return x+y ;
}

const secondOutput = (x,y)=>{
  return x+y ;
 }



const main=()=>{
  let firstNumber = parseInt(prompt("Enter First number:"));

  let secondNumber = parseFloat(prompt("Enter second number: "))

  const secondDecimalNumber = parseInt(secondNumber);
  console.log(firstOutput(firstNumber, secondDecimalNumber))
  console.log(secondOutput(secondNumber, secondDecimalNumber))


}

main();
