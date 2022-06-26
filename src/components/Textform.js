import React, { useState } from 'react'

export default function Textform(props) {
    // with use of hook below text state cane be chnage via seText state.
    const [text, setText] = useState("enter text here")
    // text= "new text" //wrong way to chnage the state. we use setText().
    // setText("new text");

    // handle event onchnage , current text will update with new text with the help of event.target.value
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    //button clicked for UPPERCASE & setText()
    const handleUpClick = () => {
        // console.log("button is clicked", text);
        let newtext = text.toUpperCase();
        setText(newtext);
        // setText("you have clicked on handleUpClick")
        props.showAlert("converted to uppercase", "success")
    }
    //button clicked for LOWERCASE & setText()
    const handleLoClick = () => {
        // console.log("button is clicked", text);
        let newtext = text.toLowerCase();
        setText(newtext);
        // setText("you have clicked on handleUpClick")
        props.showAlert("converted to lowercase", "success")
    }

    //clear text
    const handleClearText = () => {
        console.log("text is clear");
        let newtext = " ";
        setText(newtext);
        props.showAlert("text is cleared", "success");
    }

    //copy text
    const handleCopy = () => {
        console.log("text is copied");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied", "success");
    }
    //remove extra spaces
    const handleExtraspaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert("extra spaces removed", "success")
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange} value={text} rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Convert to uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}> Convert to lowercase</button>
                { /*Exercise 1: Enhancing TextUtils*/}
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}> Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}> Copy Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraspaces}> Remove extra space</button>

            </div>
            { /* //counting of words & charcters */}
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1> your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words {text.length} characters</p>
                <p> {0.008 * text.split(" ").length} Minutes Read</p>
                <h2> Preview </h2>
                <p> {text.length > 0 ? text : "enter some text for preview"}</p>
            </div>
        </>
    )
}
