import React from 'react'

export default function Selections() {
  return (
    <div className="selections_container">
        <h4>Input Language</h4>
        <select name="input" id="input">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="bengali">Bengali</option>
            <option value="gujarati">Gujarati</option>
            <option value="kannada">Kannada</option>
            <option value="malayalam">Malayalam</option>
            <option value="marathi">Marathi</option>
            <option value="punjabi">Punjabi</option>
            <option value="tamil">Tamil</option>
            <option value="telugu">Telugu</option>
        </select>
        <h4>Output Language</h4>
        <select name="output" id="output">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="bengali">Bengali</option>
            <option value="gujarati">Gujarati</option>
            <option value="kannada">Kannada</option>
            <option value="malayalam">Malayalam</option>
            <option value="marathi">Marathi</option>
            <option value="punjabi">Punjabi</option>
            <option value="tamil">Tamil</option>
            <option value="telugu">Telugu</option>
        </select>
        <h4>GPT Version</h4>
        <select name="gpt" id="gpt">
            <option value="gpt2">GPT 3.5</option>
            <option value="gpt3">GPT 4</option>
        </select>
        <button className='nav_btn'>
            Translate
        </button>
    </div>
  )
}
