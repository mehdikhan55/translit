import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.setItem('isCurrentUser', false)
    navigate('/login')
  }


  return (
    <header className='hero_header'>
      <nav className='nav'>
        <h1 className='logo_heading'>Translit</h1>
        <button onClick={(e)=>logout()} className='nav_btn'>
          Log out
        </button>
      </nav>

      <h1 className='head_text'>Just Paste It...</h1> 
    </header>
  )
}
