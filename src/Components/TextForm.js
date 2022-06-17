import React,{ useState} from "react";
// import { useSpeechSynthesis } from 'react-speech-kit';

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

      // const speak =() =>{
      // let msg = new SpeechSynthesisUtterance();
      // msg.text = text;
      // window.speechSynthesis.speak(msg);
      //  } 
    const handleOnChange = (event) =>{
      setText(event.target.value);
    }

    const [text, setText] = useState("");

  return (
    <>
    <div className="container " style={{color:props.mode==='light'?'black':'white'}}>
      <h3 className="my-3 mx-2" >{props.heading}</h3>
      <div className="container my-3  " >
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',border:props.mode==='dark'?'2px solid white':'2px solid #d0cece',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={upperConv}>Convert to UPPERCASE</button>
      <button className="btn btn-primary mx-1" onClick={lowerConv}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra space</button>
      <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-1" >Speak</button>
      <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
         

    </div>
    <div className="container my-3 mx-3 " style={{color:props.mode==='light'?'black':'white'}}>
    <h3>Your Text Summary</h3>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p> It will take {`"${0.008 * text.split(" ").length}"`} minutes time to read.</p>
    <h4>Preview Text</h4>
    <p>{text.length>0?text:'Enter somethings in the above textarea to preview'}</p>
    </div>
    </>
  );
}
