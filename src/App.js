import React, { useState } from 'react'

const App = () => {
const state = useState();
console.log(state);

// // destructuring means dividin into smaller parts
// const name = ['name1', 'name2', 'name3', 'name4','name5'];
// // console.log(name[0]);
// const [name1, name2, name3, name4,name5] = name;     //array dstructuring
// console.log(name1);

// using array dstructuring :-
const [count, setCount] = useState(0);  //[initialData, updatedData]

// let count = 1;  //currently state is 1 for   //state cannot be directly changed
const IncNum = ()=>{
  // setCount(100);
  setCount(count + 1);
  // console.log('clicked ' + count++);
}
console.log(count);
  return (<>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button>
  </>
  )
}

export default App;