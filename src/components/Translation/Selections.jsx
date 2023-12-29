import React, { useEffect } from 'react'
import loader from '../../assets/loader.svg'

export default function Selections({ inputLanguage, setInputLanguage, outputLanguage, setOutputLanguage, gptVersion, setGptVersion, loading, setLoading, isFetching, translate }) {


   
    return (
        <div className="selections_container">
            <h4>Input Language</h4>
            <select name="input" id="input" value={inputLanguage}  onChange={(e)=>setInputLanguage(e.target.value)}>
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
            <select name="output" id="output" value={outputLanguage}  onChange={(e)=>setOutputLanguage(e.target.value)} >
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
            <select name="gpt" id="gpt" onChange={(e)=>setGptVersion(e.target.value)}
            value={gptVersion}>
                <option value="gpt3">GPT 3.5</option>
                <option value="gpt4">GPT 4</option>
            </select>
            <button onClick={translate()} className='nav_btn'>
                Translate
            </button>
            {isFetching && <img src={loader} alt="loader" className='loader' />}
                
        </div>
    )
}
