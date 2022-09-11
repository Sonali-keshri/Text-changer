import React from "react";

export default function About(props) {

 let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode==='dark'?'#042743':'white'
  }
  let accordian = {
    color: props.mode ==='dark'?'grey':'#042743',
    backgroundColor: props.mode==='dark'?'white':'#CFD2CF'
    
  }
  return (
    <div className="container w-75" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2 className="text-center my-3"><u>About Us</u></h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordian}>
            Text-Changer gives you a way to analyze your text quickly and efficiently. Be it word count, character count 
            </div>
          </div>
        </div>
        <div className="accordion-item"  >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordian}>
            Text-Changer is a free character counter tool that provides instant character count & word count statistics for a given text.
                TextUtils reports the number of words and character. Thus it is suitable for writing text with word/character limit. 
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordian}>
              This word counter software works in any web browsers such as chrome, FireFox, InterExplore, Safari, Opera.  It suits is
              to count character for Facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
