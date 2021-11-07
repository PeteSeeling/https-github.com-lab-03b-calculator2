import { add, subtract, multiply, divide } from "./math-utilities";
const test = QUnit.test;
// import functions and grab DOM elements

const addButton = document.getElementById('addButton');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output = document.getElementById("output");

const myFunctions = {
  add: add(),
  subtract: subtract(),
  multiply: multiply(),
  divide: divide(),

};
//
addButton.addEventListener('click', () =>{
  const input1 = +input1.value;
  const input2 = +input2.value;
  const result = add(input1, input2);
  output.textContent = output;
  
})
 
  // use user input to update state 
  // update DOM to reflect the new state
