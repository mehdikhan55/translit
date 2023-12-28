import { useState } from 'react'
import Hero from './components/Hero'
import Tranlation from './components/Translation/Translation'
import './App.css'

function App() {

  return (
    <main className='main'>
  
      <div className="app">
        <Hero/>
        <Tranlation/>
      </div>

    </main>
  )
}

export default App
