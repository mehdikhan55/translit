import React from 'react'
import copy from '../../assets/copy.svg'
import loader from '../../assets/loader.svg'

export default function TranslationBox({ inputLanguage, outputLanguage, inputText, setInputText, outputText, setOutputText, gptVersion, loading, setLoading, error, isFetching }) {



  return (
    <div className="translation_box_section">

      <div className='box'>

        <div className='box_btn_section'>
          <h4>Output</h4>
          <div onClick={handleCopy} className='copy_btn'>
            <h4>Copy</h4>
            <img src={copy} alt="copy_icon" className='copy_icon' />
          </div>
        </div>

        <textarea className='translation_box' name="input" id="input" cols="200" rows="30" placeholder="Write here"></textarea>
      </div>

      <div className='box'>

        <div className='box_btn_section'>
          <h4>Output</h4>
          <div onClick={handleCopy} className='copy_btn'>
            <h4>Copy</h4>
            <img src={copy} alt="copy_icon" className='copy_icon' />
          </div>
        </div>

        <textarea className='translation_box' name="output" id="output" cols="200" rows="30" placeholder="Translated Text"></textarea>
        

      </div>


    </div>
  )
}
