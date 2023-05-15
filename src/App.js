import React, {useState} from 'react'

const App = () => {
  
  // Name hook
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const inputEvent = (event)=>{
    setName(event.target.value);
  }

  // Last Name hook
  const [lastname, setLastName] = useState("");
  const [fullLastname, setfullLastname] = useState();
  const inputLastNameEvent = (event)=>{
    setLastName(event.target.value);
  }

  // Email hook
  const [email, setEmail] = useState("");
  const [fullEmail, setFullEmail] = useState();
  const inputEmail = (event)=>{
    setEmail(event.target.value);
  }
  
  const onSubmits = (event)=>{
    event.preventDefault();   //prevents the default behaviour
    setFullName(name);
    setFullEmail(email);
    setfullLastname(lastname);
  }
  return (
    <>
    <div className='main_div'>
    <form onSubmit={onSubmits}>
      <div>
        <h1>Hello, {fullName} {fullLastname}</h1>
        <h1>Email:- {fullEmail}</h1>
        <input type='text' placeholder='Enter your first name' onChange={inputEvent} value={name}/>
        <input type='text' placeholder='Enter your last name' onChange={inputLastNameEvent} value={lastname}/>
        <input type='email' placeholder='Enter your email' onChange={inputEmail} value={email} />
        <button type='submit'>Submit 👍</button>
      </div>
      </form>
      </div>
    </>
  )
}
export default App;

// using form tag by default redirects to some other page