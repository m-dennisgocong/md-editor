import { useState } from 'react'
import TextEditor from './components/TextEditor';
import PreviewText from './components/PreviewText';
import HeaderMenu from './components/HeaderMenu';
import { initialText } from './components/initialText';
function App() {

  const [inputText, setInputText] = useState(initialText);
  const [typeView, setTypeView] = useState(true);

  function getText(text){
    setInputText(text);
  }
  function getView(view){
    setTypeView(view);
  }

  return (
    <div className="App">
      <HeaderMenu getView={getView}/>
      <main>
        {typeView ? 
          <TextEditor getText={getText} inputText={inputText}/> :
          <PreviewText inputText={inputText}/>
        }
      </main>
    </div>
  )
}

export default App
