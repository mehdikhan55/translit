import React, { useEffect } from 'react'
import loader from '../../assets/loader.svg'

export default function Selections({ inputLanguage, setInputLanguage, outputLanguage, setOutputLanguage, gptVersion, setGptVersion, loading, setLoading, documentType, setDocumentType, translate, docTypeByUser,setDocTypeByUser,error }) {


    const translateNow = async () => {
        translate();
    }

    return (
        <div className="selections_container">
            <h4>Input Language</h4>
            <select name="input" id="input" value={inputLanguage} onChange={(e) => setInputLanguage(e.target.value)}>
                {languageOptions.map((language) => (
                    <option key={language} value={language.toLowerCase()}>
                        {language}
                    </option>
                ))}
            </select>
            <h4>Output Language</h4>
            <select name="output" id="output" value={outputLanguage} onChange={(e) => setOutputLanguage(e.target.value)} >
                {languageOptions.map((language) => (
                    <option key={language} value={language.toLowerCase()}>
                        {language}
                    </option>
                ))}
            </select>
            <h4>GPT Version</h4>
            <select name="gpt" id="gpt" onChange={(e) => setGptVersion(e.target.value)}
                value={gptVersion}>
                <option value="gpt3">GPT 3.5</option>
                <option value="gpt4">GPT 4</option>
            </select>
            <h4>Document Type</h4>
            <select name="doc" id="doc" onChange={(e) => setDocumentType(e.target.value)}
                value={documentType}>
                <option value="standard">Standard</option>
                <option value="medical">Medical</option>
            </select>
            {documentType === 'standard' &&
                (
                    <div className='doc-type-box'>
                        <label htmlFor="doc-type"><h4>Write Doc Type </h4></label>
                        <input value={docTypeByUser} onChange={(e)=>setDocTypeByUser(e.target.value)} type="text" id='doc-type'  />
                    </div>
                )

            }
            <button onClick={() => translateNow()} className='nav_btn'>
                Translate
            </button>
            {loading && <img src={loader} alt="loader" className='loader' />}
            {error && (<h5>Some Error Occured...Try again!</h5>)}
        </div>
    )
}


const languageOptions = [
    'Afrikaans',
    'Albanian',
    'Amharic',
    'Arabic',
    'Armenian',
    'Azerbaijani',
    'Bengali',
    'Bosnian',
    'Bulgarian',
    'Catalan',
    'Chinese (Simplified)',
    'Chinese (Traditional)',
    'Croatian',
    'Czech',
    'Danish',
    'Dutch',
    'English',
    'Estonian',
    'Finnish',
    'French',
    'Georgian',
    'German',
    'Greek',
    'Gujarati',
    'Haitian Creole',
    'Hebrew',
    'Hindi',
    'Hungarian',
    'Icelandic',
    'Indonesian',
    'Irish',
    'Italian',
    'Japanese',
    'Javanese',
    'Kannada',
    'Kazakh',
    'Khmer',
    'Korean',
    'Kurdish',
    'Kyrgyz',
    'Lao',
    'Latin',
    'Latvian',
    'Lithuanian',
    'Luxembourgish',
    'Macedonian',
    'Malagasy',
    'Malay',
    'Malayalam',
    'Maltese',
    'Maori',
    'Marathi',
    'Mongolian',
    'Nepali',
    'Norwegian',
    'Odia',
    'Pashto',
    'Persian',
    'Polish',
    'Portuguese',
    'Punjabi',
    'Romanian',
    'Russian',
    'Samoan',
    'Scots Gaelic',
    'Serbian',
    'Sesotho',
    'Shona',
    'Sindhi',
    'Sinhala',
    'Slovak',
    'Slovenian',
    'Somali',
    'Spanish',
    'Sundanese',
    'Swahili',
    'Swedish',
    'Tajik',
    'Tamil',
    'Telugu',
    'Thai',
    'Turkish',
    'Turkmen',
    'Ukrainian',
    'Urdu',
    'Uyghur',
    'Uzbek',
    'Vietnamese',
    'Welsh',
    'Xhosa',
    'Yiddish',
    'Yoruba',
    'Zulu',
    'Afar',
    'Abkhazian',
    'Avestan',
    'Bambara',
    'Chichewa',
    'Dzongkha',
    'Fijian',
    'Guarani',
    'Hausa',
    'Inuktitut',
];
