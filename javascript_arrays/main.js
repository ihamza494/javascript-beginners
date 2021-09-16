const nameStr = []

const addStd = () => {
  let std = prompt("Enter student name to add in class:")
  nameStr.push(std);
}
const addStdAtFront = () => {
  let std = prompt("Enter student name to add in class at front:")
  nameStr.unshift(std);
}
const dltStd = () => {
  nameStr.pop();
}
const dltStdAtFront = () => {
  nameStr.shift();
}

const showStd = () => {

  for(let i=0; i < nameStr.length; i++){
    document.write(nameStr[i]);
  }
}

/*const appleBasket = ["🍎","🍎","🍎","🍎","🍎","🍎"];
const bananaBasket = ["🍌","🍌","🍌","🍌","🍌","🍌","🍌"]
appleBasket.splice(3,0,"🍌","🍌");*/

/*appleBasket.forEach((i)=>{
  console.log(i);
})

bananaBasket.forEach((i)=>{
  console.log(i);
})

appleBasket.splice(3,2);


appleBasket.forEach((i)=>{
  console.log(i);
})*/

const num = [3,2,5,6,4,1,9]

num.sort();

num.sort((prev,next) => { return prev>next ? -1:1})  //descending order

num.sort((prev,next) => { return prev < next ? -1:1})  //ascending order


const combinedBasket = ["a","a","a","b","a","a","a","b","b","b","b","b"]

const aBasket = combinedBasket.filter((element) => {
  return element === "a";
})

const bBasket = combinedBasket.filter((element) => {
  return element === "b";
})

const SoftwareHouse = [{
   eName : "Hamza",
   skills : "BAckend",
},
{
   eName : "Pershotam",
   skills : "FrontEnd",
},
{
   eName : "Istabraq",
   skills : "Flutter",
}]

const employeeWithInstitue = SoftwareHouse.map((element) => {
  return {
    employee  : element,
    Institute: "FAST KHI CAMPUS"
  }
})
const chkInstitute = employeeWithInstitue.every((ele) => {
 {
   return ele.Institute === "FAST KHI CAMPUS"

 }
});

const chkskills = SoftwareHouse.every((ele) => {
  {
    return ele.skills === "Flutter"
 
  }
 })