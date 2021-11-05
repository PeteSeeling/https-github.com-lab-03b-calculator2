// import functions and grab DOM elements
const addInput1 = document.getElementById('input1');
console.log(addInput1);

const addInput2= document.getElementById('input2');
console.log(addInput2);

const button1 = document.getElementById('button1');
console.log(button1)

const result = document.getElementById('Result')
console.log('result')
// initialize global state

// set event listeners 

button1.addEventListener('click', ()=>{
  const input1 = +addInput1.value
  const input2 = +addInput2.value;

  const result = add(Number1, Number2);
})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
