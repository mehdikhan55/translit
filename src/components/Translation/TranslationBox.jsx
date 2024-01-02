import React from 'react'
import copy from '../../assets/copy.svg'
import loader from '../../assets/loader.svg'
import tick from '../../assets/tick.svg'


export default function TranslationBox({ inputLanguage, outputLanguage, inputText, setInputText, outputText, setOutputText, gptVersion, loading, setLoading, error, isFetching }) {

  const [copied, setCopied] = React.useState(false);


  const handleCopy=(txt)=>{
    setCopied(true);
    navigator.clipboard.writeText(txt);
    setTimeout(() => {
     setCopied(false)
    }, 2500);
     }

  return (
    <div className="translation_box_section">

      <div className='box'>

        <div className='box_btn_section'>
          <h4>Input</h4>
          <div onClick={()=>handleCopy(inputText)} className='copy_btn'>
            <h4>Copy</h4>
            <img src={copied ? tick:copy} alt="copy_icon" className='copy_icon' />
          </div>
        </div>

        <textarea className='translation_box' value={inputText} onChange={(e)=>setInputText(e.target.value)} name="input" id="input" cols="200" rows="30" placeholder="Write here"></textarea>
      </div>

      <div className='box'>

        <div className='box_btn_section'>
          <h4>Output</h4>
          <div  onClick={()=>handleCopy(outputText)} className='copy_btn'>
            <h4>Copy</h4>
            <img src={copied ? tick:copy} alt="copy_icon" className='copy_icon' />
          </div>
        </div>

        <textarea readOnly value={outputText} onChange={(e)=>setOutputText(e.target.value)}   className='translation_box' name="output" id="output" cols="200" rows="30" placeholder="Translated Text"></textarea>
        

      </div>


    </div>
  )
}
