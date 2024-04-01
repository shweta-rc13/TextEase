import React, {useState} from 'react';




const TextForm = (props) => {
  const [text, setText] = useState('');

const handleClick = () => {
    console.log('clicked' + text)
    let newText = text.toUpperCase();
    setText(newText)
}

const handlelowClick = () => {
  let lowtext = text.toLowerCase();
  setText(lowtext)
}

const handleClearClick = () => {
  let lowtext =("");
  setText(lowtext)
}

const handleOnChange = (e) => {
    console.log('on change')
    setText(e.target.value)
}

const handleCopy = () => {
const text = document.getElementById("myBox")

text.select();
document.execCommand("copy")
  // navigator.clipboard.writeText(text.value);
};


  return (
<>
<div className="container">

<h1>{props.heading} </h1>
<div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-3" onClick={handleClick}>  Convert to Upper Case</button>

<button className="btn btn-primary mx-3" onClick={handlelowClick}>  Convert to Lower Case</button>

<button className="btn btn-primary mx-3" onClick={handleClearClick}> Clear</button>

<button className="btn btn-primary mx-3" onClick={handleCopy}> Copy Text</button>

</div>
<div className="container my-3">
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p> {0.008 * text.split(" ").length} Minutes to read</p>
<h2>Preview</h2>
<p>{text}</p>
</div>

</>
  )
}

export default TextForm
