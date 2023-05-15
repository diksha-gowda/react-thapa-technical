import React, {useState} from 'react'

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: ""
  });
  const inputEvent = (event)=>{
    // event.target.attributeName
    const value = event.target.value;
    const name = event.target.name;
    const placeholder = event.target.placeholder;
    console.log("Value " + value);
    console.log("Name " + name);
    console.log("Placeholder " + placeholder);
    setFullName((preValue)=>{
      if( name === 'fName'){
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
        };
      } else if( name === 'lName'){
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
        };
      } else if( name === 'email'){
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
        };
      }
    });
  }

  const onSubmits = (event)=>{
    event.preventDefault();
    alert("Submit");
    // window.location.reload(false);
  }
  return (
    <>
    <div className='main_div'>
    <form onSubmit={onSubmits}>
      <div>
      Name: {fullName.fname} {fullName.lname}
      <br></br>
      Email: {fullName.email}
        <input type='text' placeholder='Enter your first name' name='fName' onChange={inputEvent}/>
        <input type='text' placeholder='Enter your last name' name='lName' onChange={inputEvent}/>
        <input type='email' placeholder='Enter your email' name='email' onChange={inputEvent}/>
        <button type='submit'>Submit 👍</button>
      </div>
      </form>
      </div>
    </>
  )
}
export default App;

// using form tag by default redirects to some other page