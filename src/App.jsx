import { useState } from 'react'
import TextEditor from './components/TextEditor';
import PreviewText from './components/PreviewText';
import HeaderMenu from './components/HeaderMenu';
import './App.scss';
function App() {
const initialText = 
`# H1
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

[md-edit](https://github.com/m-dennisgocong/md-editor)`;
  const [inputText, setInputText] = useState(initialText);
  const [typeView, setTypeView] = useState(true);
  const [screenType, setScreenType] = useState(false);

  function getText(text){
    setInputText(text);
  }
  function getView(view){
    setTypeView(view);
  }
  function setScreen(screen){
    setScreenType(screen);
  }

  const editText = <TextEditor getText={getText} inputText={inputText}/>;
  const previewText = <PreviewText inputText={inputText}/>;
  return (
    <div className="App">
      <HeaderMenu getView={getView} setScreen={setScreen}/>
      
      {screenType ? 
        <main>
          {typeView ? editText : previewText}
        </main>
          :
        <main>
          {typeView && editText}
          {previewText}
        </main>
      } 
    </div>
  )
}

export default App
