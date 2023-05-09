import React, { useState } from 'react'
// const App = () => {
//   let newTime = new Date().toLocaleTimeString();
//   const [currentTime, updatedTime] = useState(newTime);
//   // [initialData, updateData]
//   const UpdateTime = ()=>{
//     newTime = new Date().toLocaleTimeString();
//     updatedTime(newTime);
//   }
//   return (
//   <>
//   <h1>{currentTime}</h1>
//   <button onClick={UpdateTime}>GET TIME</button>
//   </>
//   )
// }

const App = ()=>{
  let ntime = new Date().toLocaleTimeString();
  const[time, utime] = useState(ntime);
  // total 3 variables
  // ntime - will give current time, time - will give time showed on doc, utime - will give updated time
  const clickFunction = ()=>{
    let time = new Date().toLocaleTimeString();
    utime(time);
  }
  return(
    <>
      <h1>{time}</h1>
      <button onClick={clickFunction}><b><i>UPDATED</i></b></button>
    </>
  );
}

export default App;