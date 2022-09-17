import { useState } from 'react'
import TextEditor from './components/TextEditor';
import PreviewText from './components/PreviewText';
function App() {

  const [inputText, setInputText] = useState("");
  const [singleView, setSingleView] = useState(true);

  function handleChange(event){
    setInputText(event.target.value);
  }

  return (
    <div className="App">
      <header>
        <ul>
          <li>Editor</li>
          <li>Preview</li>
          <li>Toolbox</li>
        </ul>
      </header>
      <main>
        <TextEditor handleChange={handleChange} />
        {singleView && <PreviewText inputText={inputText}/>}
      </main>
    </div>
  )
}

export default App
