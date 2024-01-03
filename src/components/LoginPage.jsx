import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

  const navigate = useNavigate()

  const [pass, setPass] = useState('')


  useEffect(() => {
    if(localStorage.getItem('isCurrentUser')==='true') {
      navigate('/')
    }
  },[])

  const handleSubmit = (e) => {
    let isCurrentUser = localStorage.getItem('isCurrentUser');
    if (pass === import.meta.env.VITE_PASS) {
      localStorage.setItem('isCurrentUser', true)
      isCurrentUser = localStorage.getItem('isCurrentUser');
      console.log("isCurrentUser:"+isCurrentUser)
      navigate('/');
    } else {
      alert('Wrong password!')
    }
  }

  return (
    <section className='login-container'>
      <div className="login-box">
        <label htmlFor="pass-field"><h2>Password</h2></label>
        <input value={pass}  onChange={(e)=>setPass(e.target.value)} type="password" required id='pass-field' />
        <button  className='login-btn' onClick={()=>handleSubmit()}>Login</button>
      </div>
    </section>
  )
}
