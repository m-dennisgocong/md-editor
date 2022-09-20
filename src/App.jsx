import { useState } from 'react'
import TextEditor from './components/TextEditor';
import PreviewText from './components/PreviewText';
import HeaderMenu from './components/HeaderMenu';
import { initialText } from './components/initialText';
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
    </div>
  )
}

export default App
