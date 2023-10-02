import React ,{useState} from 'react'

export default function 
(props) {

   
    
    //  const [mystyle, setmystyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
        
    // })
    let mystyle={
      color: props.mode==='dark'?'white':'#2c2841',
      backgroundColor: props.mode=='dark'?'#2c2841':'white',
      // border:'2px solid',
      // borderColor: props.mode==='dark'?'white':'#2c2841'

    }
 
   
  return (
    <div className="container"  >
        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}>About us</h1>
        <div className="accordion" id="accordionExample" >
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyse Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextPlayergives you a way to analyse your text quickly and efficiently.Be it Word Count,Character Count .
             </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to Use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
       TextPlayer is a free character countertool that provides instant character count & word count statisticsfor a given
       text.TextPlayer reports the number of words and characters.Thus it is suitable for writing text with <word />
      character limit.
             </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      This word counter software works in any web browsers such as Chrome,Firefox,Internet Explorer,Safari,Opera.It suits to count characters in 
      facebook,blog,books,excel document,pdf document,essays,etc.
            </div>
    </div>
  </div>
</div>
{/* <div className="container2 my-3  " >
<button type="button" onClick={togglestyle} className="btn btn-primary">{btntext}</button>

</div> */}
    </div>
  )
}
