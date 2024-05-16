import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
      if(text.length>0){
        let NewText = text.toUpperCase();
        SetText(NewText);
        props.ShowAlert("Converted to Upper Case","success");
      }
      else{
        props.ShowAlert("First add the text in the box","danger");
      }
    }
    const handleLoClick = ()=>{
      if(text.length>0){
        let NewText = text.toLowerCase();
        SetText(NewText);
        props.ShowAlert("Converted to Upper Case","success");
      }
      else{
        props.ShowAlert("First add the text in the box","danger");
      }
    }
    const handleOnChange = (event)=>{
      SetText("");
      SetText(event.target.value);
    }
    const handleClearClick = ()=>{
      if(text.length>0){
        SetText("");
        props.ShowAlert("Text has been cleared","success");
      }
      else{
        props.ShowAlert("First add the text in the box","danger");
      }
    }
    const handleCopyClick = ()=>{
      if(text.length>0){
        var Newtext = document.getElementById("myBox");
        Newtext.select();
        navigator.clipboard.writeText(Newtext.value);
        props.ShowAlert("Copy to Clipboard","success");
      }
      else{
        props.ShowAlert("First add the text in the box","danger");
      }
    }
    const handleExtraSpaces = () =>{
      if(text.length>0){
        let NewText = text.split(/[ ]+/);
        SetText(NewText.join(" "));
        props.ShowAlert("Extra Spaces removed","success");
      }
      else{
        props.ShowAlert("First add the text in the box","danger");
      }
    }
    const [text, SetText] = useState("");
  return (
    <>
    <div className='container'>
      <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" row="8" placeholder='Enter Text Here!'></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Sapces</button>
    </div>
    <div className='container my-3'>
        <h3>Text Summary</h3>
        <p> {text.split(" ").length -1} Words & {text.length} Characters</p>
        <h3>Preview</h3>
        <p> {text.length>0?text:"Enter Something in the above text box to preview that here!"} </p>
    </div>
    </>
  )
}
