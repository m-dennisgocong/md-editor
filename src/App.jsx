import { useState } from 'react'
import TextEditor from './components/TextEditor';
import PreviewText from './components/PreviewText';
function App() {

  const [inputText, setInputText] = useState("");
  const [singleView, setSingleView] = useState(true);

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
        <TextEditor />
        {!singleView && <PreviewText />}
      </main>
    </div>
  )
}

export default App
