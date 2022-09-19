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


  return (
    <div className="App">
      <HeaderMenu getView={getView} setScreen={setScreen}/>
      {screenType ? 
        <main className='singleScreen'>
          {typeView ? 
          <TextEditor getText={getText} inputText={inputText}/> :
          <PreviewText inputText={inputText}/>}
        </main>
          :
        <main className='dualScreen'>
          <TextEditor getText={getText} inputText={inputText}/>
          <PreviewText inputText={inputText}/>
        </main>
      } 
      
    </div>
  )
}

export default App
