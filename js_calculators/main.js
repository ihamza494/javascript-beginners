let accumulatorString = ""
let total = 0


const update_Accumulator_View = (newNumber) => {
    accumulatorString = newNumber
    const accElement = document.querySelector('.calculator_Output_Accumulator')
    accElement.innerHTML = accumulatorString

}

const update_Display_View = (number) => {
    const totElement = document.querySelector('.calculator_Output_Display')
    totElement.innerHTML = number
    totElement.removeAttribute('hidden')
    
}


const digit_Pressed = (number) => {
    const totElement = document.querySelector('.calculator_Output_Display')
    totElement.setAttribute('hidden', true)
    update_Accumulator_View(accumulatorString + number);
}



const operator_Pressed = (operator) => {
    if (accumulatorString.length == 0){
        return;
    }
    const totElement = document.querySelector('.calculator_Output_Display')
    totElement.setAttribute('hidden', true)
    const lastChar = accumulatorString[accumulatorString.length - 1];
    if (isNaN(lastChar)){
        accumulatorString = accumulatorString.substr(0, accumulatorString.length-1);
    }
    update_Accumulator_View(accumulatorString + operator);
}

const equal_Pressed = () => {
try   { 
    const totElement = document.querySelector('.calculator_Output_Display')
    totElement.removeAttribute('hidden')
    total = eval(accumulatorString)
    const isFloating = total % 1 !== 0
    totElement.innerHTML = isFloating ? total.toFixed(2): total;
    if(isFloating){
        total = total.toFixed(2);
    }
  
    update_Display_View(total);
    update_Accumulator_View(" ");
    update_Accumulator_View(accumulatorString + total);}
catch(e){
    alert("Wrong operation!")
    clear_Cal();
}
}
const dlt_Btn = () => {
    accumulatorString = accumulatorString.substr(0, accumulatorString.length -1);
    update_Accumulator_View(accumulatorString);
}
const clear_Cal = ()=> {
    update_Accumulator_View("");
    update_Display_View(0);
}

const main = () => {
    update_Display_View(0);
}

main();