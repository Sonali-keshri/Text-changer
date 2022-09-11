import React,{ useState} from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

export default function TextForm(props) {
    const upperConv = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
      }
      
      const lowerConv = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")
      }
      
      const clearText = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success")
      }
      
      const handleExtraSpaces = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showAlert("Extra space has been removed","success")
      }
      
      const copyText=()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been Copied","success")

      }

    const {speak} = useSpeechSynthesis();

    const handleOnChange = (event) =>{
      setText(event.target.value);
    }

    const [text, setText] = useState("");

  return (
    <>
    <div className="container " style={{color:props.mode==='light'?'black':'white'}}>
      <h3 className="my-3 mx-2" >{props.heading}</h3>
      <div className="container my-3  " >
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#A4A4A4':'white',border:props.mode==='dark'?'1px solid white':'2px solid #d0cece',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={upperConv}>Convert to UPPERCASE</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowerConv}>Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra space</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={()=>speak({text:text})} >Speak</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
         

    </div>
    <div className="container my-3 mx-3 " style={{color:props.mode==='light'?'black':'white'}}>
    <h3>Your Text Summary</h3>
    <p> {text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} words and {text.length} characters</p>
    <p> It will take {`"${0.008 * text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length}"`} minutes time to read.</p>
    <h4>Preview Text</h4>
    <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  );
}
