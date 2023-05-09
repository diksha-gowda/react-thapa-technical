import React, { useState } from 'react'

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [currentTime, updatedTime] = useState(newTime);
  // [initialData, updateData]\

  const UpdateTime = ()=>{
    newTime = new Date().toLocaleTimeString();
    updatedTime(newTime);
  }
  return (
  <>
  <h1>{currentTime}</h1>
  <button onClick={UpdateTime}>GET TIME</button>
  </>
  )
}

export default App;