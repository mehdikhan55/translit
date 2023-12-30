import React,{useState,useEffect} from 'react'
import Selections from './Selections'
import TranslationBox from './TranslationBox'
import { useLazyGetTranslationQuery } from '../../services/translation';


export default function Translation() {
  const [outputLanguage, setOutputLanguage] = useState('english');
  const [inputLanguage, setInputLanguage] = useState('english');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [documentType,setDocumentType]= useState("standard");
  const [loading, setLoading] = useState(false);
  const [gptVersion,setGptVersion] = useState('gpt3');

  const [getTranslation,{error,isFetching}] = useLazyGetTranslationQuery();


  //calling api
  const translate=()=>async()=>{
    setLoading(true);
    const data = await getTranslation({inputLanguage,outputLanguage,inputText,gptVersion});
    setOutputText(data.data.translatedText);
    setLoading(false);
  }

  useEffect(() => {console.log(error);},[error]);
  


//checking languages and gpt version
useEffect(() => {
  console.log(inputLanguage, outputLanguage, gptVersion);
}, [inputLanguage, outputLanguage, gptVersion])


  return (
    <section className='tranlation_section'>

        <Selections 
        inputLanguage={inputLanguage} 
        setInputLanguage= {setInputLanguage}
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
