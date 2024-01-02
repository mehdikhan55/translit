import React, { useState, useEffect } from 'react'
import Selections from './Selections'
import TranslationBox from './TranslationBox'
import { useLazyGetTranslationQuery } from '../../services/translation';

import OpenAI from 'openai';


export default function Translation() {
  const [outputLanguage, setOutputLanguage] = useState('english');
  const [inputLanguage, setInputLanguage] = useState('english');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [documentType, setDocumentType] = useState("standard");
  const [loading, setLoading] = useState(false);
  const [gptVersion, setGptVersion] = useState('gpt3');
  const [messageToSend, setMessageToSend] = useState("");

  const [getTranslation, { error, isFetching }] = useLazyGetTranslationQuery();



  //calling api
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_GPT_KEY,
    dangerouslyAllowBrowser: true,
  });

  


  const translate = async () => {
    console.log("translate called")
    try {
      setLoading(true);
      // console.log("input text: " + inputText);

      const msg=`You are a ${inputLanguage} to ${outputLanguage}  translator. This document is a ${documentType} type. Translate the following text accurately and give output in the same format as i gave you, this is the text you have to translate: ${inputText}`

      // console.log("msg: " + msg)

      if(inputText.length===0 || inputText==="" || inputText===null){
        alert("Please enter some text to translate")
        return;
      }

      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: msg }],
        model: "gpt-3.5-turbo",
      });

      if (response && response.choices && response.choices.length > 0) {
        const translatedContent = response.choices[0].message.content;
        console.log(translatedContent);
        setOutputText(translatedContent);
      } else {
        // Handle empty or invalid response
        console.error("Invalid response from OpenAI API");
      }
    } catch (error) {
      // Handle errors
      console.error("Error translating text:", error);
    } finally {
      setLoading(false);
    }
    console.log("translate ended")
  };


  useEffect(() => { console.log(error); }, [error]);




  //checking languages and gpt version
  useEffect(() => {
    console.log(inputLanguage, outputLanguage, gptVersion);
  }, [inputLanguage, outputLanguage, gptVersion])


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
        isFetching={isFetching}
        translate={translate}
        documentType={documentType}
        setDocumentType={setDocumentType}
        
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
        isFetching={isFetching}
      />

    </section>
  )
}
