import { useState } from "react";
import './TextEditor.scss';

const TextEditor = ({getText, inputText}) => {

    const [text, setText] = useState(inputText);

    function handleChange(event){
        const {value} = event.target
        setText(value);
        getText(value); // callback function
    }

    return(
        <textarea name="editor" id="editor" onChange={handleChange} value={text} type="text"></textarea> 
    );
}
export default TextEditor;