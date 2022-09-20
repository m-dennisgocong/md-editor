import oneScreenIcon from './../assets/singleScreen.svg'
import splitScreenIcon from './../assets/splitScreen2.svg'
import './Header.scss';
const HeaderMenu = ({getView, setScreen}) => {

    function changeView(event){
      event.preventDefault()
      const tool = event.target.className;
      if(tool === "Editor"){
        getView(true)
      }else{
        getView(false)
      }
    }
    function changeScreen(event){
      event.preventDefault();
      const screen = event.target.className;
      if(screen === 'singleScreen'){
        setScreen(true);
      }else{
        setScreen(false);
      }
    }

    return (
    <header>
        <nav>
          <ul>
            <li><a href="#"  onClick={changeView} className="Editor">Editor</a></li>
            <li><a href="#" onClick={changeView} className="Preview">Preview</a></li>
          </ul>
        </nav>
        <div id="toolbox">
          <img onClick={changeScreen} className="singleScreen" src={oneScreenIcon} alt="single screen" />
          <img onClick={changeScreen} className="splitScreen" src={splitScreenIcon} alt="split screen" />
        </div>
        
        
    </header>
    );
}
export default HeaderMenu;