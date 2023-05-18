import { useState } from 'react'
import TextEditor from './components/TextEditor';
import PreviewText from './components/PreviewText';
import HeaderMenu from './components/HeaderMenu';
import {initialText} from './initialText.js'
import './App.scss';
function App() {

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
      <footer>
        <a href="https://github.com/m-dennisgocong/md-editor"><img src="./src/assets/github-mark-white.svg" alt="" /> Dennis Goc-ong</a>
      </footer> 
    </div>
  )
}

export default App
