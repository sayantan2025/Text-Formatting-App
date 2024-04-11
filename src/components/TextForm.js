import React , {useState} from 'react'



export default function TextForm(props) {
    const handleOnChange=(event)=>{
       
        setText(event.target.value);
    }
    const handleLowClick=()=>{
        let lowtext = text.toLowerCase();
        setText(lowtext);
        props.showalert("Converted to lowercase","success");
    }
    const handleClearClick=()=>{
        let lowtext = '';
        setText(lowtext);
        props.showalert("Text Cleared","success");
    }
    const handleUpClick=()=>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to uppercase","success");
    }
    const [text,setText]= useState("");
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey' : 'white',color: props.mode === 'dark'?'white' : '#042743'}} id="mybox" rows="8"></textarea>
        </div>
   <button  className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
   <button  className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to lowercase</button>
   <button  className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white' : '#042743'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length} minutes are required to read</p>
    </div>
    </>
  )
}
