import './App.css';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import loginimg from './image/login-img.png';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [orNot, setOrNot] = useState(false);
  const [checkbox, setCheckbox] = useState("")

  useEffect(() => {
    if (Cookies.get("username") && Cookies.get("password")) {
      setOrNot(false); 
    } 
    else {
      setTimeout(() => setOrNot(true), 500);
    }
  }, []);

  function handleClose() {
    setOrNot(false);
  }

  function handleLogin() {
    Cookies.set("username", username);
    Cookies.set("password", password);
    setOrNot(false);
  }

  const allGet = !(username && password && checkbox)


  return (
    <div className="App">
      <h1>Welcome Developer...</h1>
      {orNot === true ? (
        <div className='overlay'>
          <div className='all'>
            <form onSubmit={handleLogin}>
              <h1>Login</h1>
              <div className='inputs'>
                <label htmlFor="inp1">Username</label>
                <input type="text" id='inp1' placeholder='Enter your username' required onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="inp2">Password</label>
                <input type="password" id='inp2' placeholder='Enter your password' required onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className='check-box'>
                <input type="checkbox" className='check' onChange={(e)=>setCheckbox(e.target.checked)}/>
                <p>Remember me</p>
              </div>
              <button className='btn' type='submit' disabled={allGet}>
                Submit
              </button>
              <span className='close-btn' onClick={handleClose}><i className="fa-solid fa-xmark"></i></span>
            </form>
            <div className='img-left'>
              <img src={loginimg} alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
