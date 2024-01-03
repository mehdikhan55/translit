import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage({auth, setAuth}) {

  const navigate = useNavigate()  

  const [pass, setPass] = useState('')


  useEffect(() => {
    if(localStorage.getItem('isCurrentUser')==='true') {
      setAuth(true);
      navigate('/')
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    let isCurrentUser = localStorage.getItem('isCurrentUser');
    console.log("isCurrentUser: is "+isCurrentUser)
    if (pass === import.meta.env.VITE_PASS) {
      localStorage.setItem('isCurrentUser', true)
      isCurrentUser = localStorage.getItem('isCurrentUser');
      console.log("isCurrentUser:"+isCurrentUser)
      setAuth(true);
      navigate('/');
    } else {
      alert('Wrong Password!')
    }
  }

  return (
    <section className='login-container'>
      <form onSubmit={handleSubmit} className="login-box">
        <label htmlFor="pass-field"><h2>Password</h2></label>
        <input value={pass}  onChange={(e)=>setPass(e.target.value)} type="password" required id='pass-field' />
        <button  className='login-btn' >Login</button>
      </form>
    </section>
  )
}
