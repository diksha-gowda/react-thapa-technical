import React, { useState } from 'react'
const getRandomColor = ()=>{
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const App = () => {
  const purple = '#8e44ad';
  const [bg, setBg] = useState(purple); // bg will fetch purple
  const bgChange = ()=>{
  let newbg = getRandomColor();
  console.log(newbg);
  setBg(newbg);
}
  return (
    <>
        <div style={{ backgroundColor: bg}}>
          <button onClick={bgChange}>Click Me</button>
        </div>
    </>
  )
}

export default App;