import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState('');
  const handleonChange=(event)=>{
   
    // console.log("on change  clicked");
    setText(event.target.value);
  }
  const handleupClick=()=>{
    let newtext= text.toUpperCase();
    // console.log("Uppercase was clicked");
    setText(newtext);
    props.showalert("Converted to UpperCase Letters","success");
  }
  const handlelpclick=()=>{
    let txt= text.toLowerCase();
    // console.log("LowerCase was Clicked");
    setText(txt);
    props.showalert("Converted to LowerCase Letters","success");
  }
  const handleclearclick=()=>{
    
    // console.log("LowerCase was Clicked");
    setText("");
    props.showalert("Text Cleared","success");
  }
  const removespace=()=>{
    let newtxt=text.split(/[ ]+/);
    setText(newtxt.join(" "));
    props.showalert("Space Removed","success");
  }
  const removeline=()=>{
    var line = '';
    var lines = text.split("\n"); //multiLines contains your text
    for(var i=0; i<lines.length; i++){
      if(lines[i].startsWith(" ")){
        line += " " + lines[i].trim();  
      }else{
        line +=  " "+ lines[i].trim();  
          
      }    
    }
    props.showalert("Line Removed","success");
    line = line.substring(1).trim();
    setText(line);

  }
  const copytxt=()=>{
    var copyText = document.getElementById("mybox");
    props.showalert("Text Copied ","success");

  // Select the text field
  // copyText.select();

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  // document.getSelection().removeAllRanges();
  }
  return (
    <>
   <div className='container'style={{backgroundColor:props.mode==='dark'?'#27264e':'white',color:props.mode==='dark'?'white':'black'}} >
   <h1 className='mb-4'>{props.heading}</h1>
    <textarea className="form-control"  value={text}  onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#df9090':'white',color:props.mode==='dark'?'white':'black',caretColor:props.mode==='dark'?'golden':'black',border:'2px solid black'}} id="mybox" rows="8"></textarea>
  {/* </div> */}
  <button   disabled={text.length===0} className="btn btn-primary my-2" onClick={handleupClick} >
    Convert To UpperCase
  </button>
 <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick ={handlelpclick}>Convert to LowerCase</button>
 <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick ={handleclearclick}>Clear</button>
 <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick ={removespace}>Remove Extra Space</button>
 <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick ={removeline}>Remove Line</button>
 <button   disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick ={copytxt}>Copy Text</button>

 
   </div>
   <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'#27264e':'white',color:props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and  {text.length} letters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview"}</p>
   </div>
   </>
  )

}
