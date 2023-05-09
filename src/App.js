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

  const [name, setName] = useState('Click Me');
  let newbg = getRandomColor();
  
  const bgChange = ()=>{
    setBg(newbg);
    setName("Ouch!! 😨");
}
  const bgBank = ()=>{
    setBg(newbg);
    setName("Aiyyo 😱");
}
  return (
    <>
        <div style={{ backgroundColor: bg}}>
          <button onMouseEnter={bgChange} onMouseLeave={bgBank}>{name}</button>
        </div>
    </>
  )
}


export default App;