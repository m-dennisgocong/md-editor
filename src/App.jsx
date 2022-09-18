import { useState } from 'react'
import TextEditor from './components/TextEditor';
import PreviewText from './components/PreviewText';

function App() {

  const initialText = 
  ` 
  # H1
  ## H2
  ### H3
  
  **bold text**

  *italicized text*

  > blockquote

  1. First item
  2. Second item
  3. Third item

  - First item
  - Second item
  - Third item

  \` inline code\`

  \`\`\`
    function display(){
      console.log("blocks code");
    }
  \`\`\`

  [md-edit](https://github.com/m-dennisgocong/md-editor)

  ![alt text](./../public/markdown_logo.png)
  `;
  const [inputText, setInputText] = useState(initialText);
  const [singleView, setSingleView] = useState(true);

  function getText(text){
    setInputText(text);
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
        <TextEditor getText={getText} inputText={inputText}/>
        {singleView && <PreviewText inputText={inputText}/>}
      </main>
    </div>
  )
}

export default App
