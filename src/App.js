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
    let time = new Date().toLocaleTimeString();
    const [ctime, utime] = useState(time);

    const updateTime = ()=>{
      time = new Date().toLocaleTimeString();
      utime(time);
    }

// you can pass a callback function in setInterval()
    setInterval(() => {
      time = new Date().toLocaleTimeString();
      utime(time);
    }, 1000);
    // OR
    // setInterval(updateTime, 100);

  return(
    <>
      <h1><b>{time}</b></h1>
      <button>Click</button>
      </>
  );
}
export default App;