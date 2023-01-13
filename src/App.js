
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
   setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = (e) => {
    console.log({ email, password })
    axios.post('https://reqres.in/api/login',

    {
      email: email,
      password: password, 
    })
   .then(result=>{
    console.log(result.data)
    alert('Success')
   })
   .catch(error=>{
    console.log(error)
    alert('service Error')
  })
  }

  return (
    <div className='App'>
     Email : <input value={email} onChange={handleEmail} text='text' /> <br />
     Password : <input value={password} onChange={handlePassword} text='text' /> <br />
     <button onClick={handleApi}>Login</button>
    </div>
  );
}

export default App;



// mail id: eve.holt@reqres.in
// password:cityslicka