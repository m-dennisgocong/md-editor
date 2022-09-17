const TextEditor = ({handleChange}) => {

    return(
        <>
            <textarea name="editor" id="editor" onChange={handleChange} cols="45" rows="35"></textarea>
        </>
    );
}
export default TextEditor;