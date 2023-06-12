import React, {useState} from 'react'
import Propsss from './Propsss';

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });
  const inputEvent = (event)=>{
    // event.target.attributeName
    const {name, value} = event.target;
    setFullName((preValue)=>{
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      }
    });

  }

  const onSubmits = (event)=>{
    event.preventDefault();
    alert("Submit");
    window.location.reload(false);
  }
  return (
    <>
    <div className='main_div'>
    <form onSubmit={onSubmits}>
      <div>
      <p>{fullName.fname}</p>
      <p>{fullName.lname}</p>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
        <input type='text' placeholder='Enter your first name' name='fname' onChange={inputEvent}/>
        <input type='text' placeholder='Enter your last name' name='lname' onChange={inputEvent}/>
        <input type='email' placeholder='Enter your email' name='email' onChange={inputEvent}/>
        <input type='tel' placeholder='Enter your phone number' name='phone' onChange={inputEvent} />
        <button type='submit'>Submit 👍</button>
      </div>
      </form>
      </div>
      <Propsss />
    </>
  )
}
export default App;

// using form tag by default redirects to some other page