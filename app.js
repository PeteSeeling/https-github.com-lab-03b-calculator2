import { add } from 'utilities.js';
// import functions and grab DOM elements
const addInput1 = document.getElementById('input1');
const addInput2= document.getElementById('input2');
const button1 = document.getElementById('button1');
const result = document.getElementById('result');
//
button1.addEventListener('click', ()=>{
  const number1 = +input1.value;
  const number2 = +input2.value;
  const result = add(number1, number2);
  addResult.textContent = result.value;
  
})
 
  // use user input to update state 
  // update DOM to reflect the new state
