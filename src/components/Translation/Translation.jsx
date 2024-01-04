import React, { useState, useEffect } from 'react'
import Selections from './Selections'
import TranslationBox from './TranslationBox'

import OpenAI from 'openai';


export default function Translation() {
  const [outputLanguage, setOutputLanguage] = useState('english');
  const [inputLanguage, setInputLanguage] = useState('english');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [documentType, setDocumentType] = useState("standard");
  const [docTypeByUser,setDocTypeByUser]=useState("");
  const [loading, setLoading] = useState(false);
  const [gptVersion, setGptVersion] = useState('gpt3');
  const [error,setError]=useState(false);


  //calling api
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_GPT_KEY,
    dangerouslyAllowBrowser: true,
  });


  const translate = async () => {
    let msg
    try {
      setLoading(true);

      if(documentType==='standard'){
         msg=`You are a ${inputLanguage} to ${outputLanguage}  translator. This document is a ${docTypeByUser}. Translate the following text accurately and give output in the exact same format as i gave you, this is the text you have to translate: ${inputText}`
      }else if(documentType ==='medical'){
         msg=`You are a ${inputLanguage} to ${outputLanguage} medical translator. Translate the following text accurately and give output in the exact same format as i gave you, this is the text you have to translate: ${inputText}`
      }

      if(inputText.length===0 || inputText==="" || inputText===null){
        alert("Please enter some text to translate")
        return;
      }

      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: msg }],
        model: gptVersion === 'gpt4' ? "gpt-4" : "gpt-3.5-turbo",
      });

      if (response && response.choices && response.choices.length > 0) {
        const translatedContent = response.choices[0].message.content;
    
        setOutputText(translatedContent);
      } else {
        // Handle empty or invalid response
        setError(true);
        setTimeout(() => {
          setError(false)
        }, 2500);
        // console.error("Invalid response from OpenAI API");
      }
    } catch (error) {
      // Handle errors
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 2500);
      // console.error("Error translating text:", error);
    } finally {
      setLoading(false);
    }
    console.log("translate ended")
  };






  return (
    <section className='tranlation_section'>

      <Selections
        inputLanguage={inputLanguage}
        setInputLanguage={setInputLanguage}
        outputLanguage={outputLanguage}
        setOutputLanguage={setOutputLanguage}
        gptVersion={gptVersion}
        setGptVersion={setGptVersion}
        loading={loading}
        setLoading={setLoading}
        translate={translate}
        documentType={documentType}
        setDocumentType={setDocumentType}
        docTypeByUser={docTypeByUser}
        setDocTypeByUser={setDocTypeByUser}
        error={error}
      />

      <TranslationBox
        inputLanguage={inputLanguage}
        outputLanguage={outputLanguage}
        inputText={inputText}
        setInputText={setInputText}
        outputText={outputText}
        setOutputText={setOutputText}
        gptVersion={gptVersion}
        loading={loading}
        setLoading={setLoading}
        error={error}

      />  

    </section>
  )
}
