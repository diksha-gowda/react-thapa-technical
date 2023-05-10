import React, {useState} from 'react'

const App = () => {
  
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const inputEvent = (event)=>{
    setName(event.target.value);
  }
  const onSubmit = ()=>{
    setFullName(name);
  }
  return (
    <>
      <div>
        <h1>Hello, {fullName}</h1>
        <input type='text' placeholder='Enter your name' onChange={inputEvent} value={name}/>
        <button onClick={onSubmit}>Click 👍</button>
      </div>
    </>
  )
}
export default App;


// // In React there are two types of components :- 
//   Controlled and
//   Uncontrolled Component

// In a controlled component, form data is handled by a React Component,
// the alternative is uncontrolled components, where form data is handled by the DOM itself.