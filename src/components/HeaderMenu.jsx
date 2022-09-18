import oneScreenIcon from './../assets/singleScreen.svg'
import splitScreenIcon from './../assets/splitScreen2.svg'
const HeaderMenu = ({getView}) => {

    function changeView(event){
        event.preventDefault()
        const tool = event.target.className
        if(tool !== "Editor"){
          getView(!true)
        }else{
          getView(!false)
        }
    }

    return (
    <header>
        <nav>
          <ul>
            <li><a href=""  onClick={changeView} className="Editor">Editor</a></li>
            <li><a href="" onClick={changeView} className="Preview">Preview</a></li>
          </ul>
        </nav>
        <div id="toolbox">  
          <a href="" className='single-screen'><img src={oneScreenIcon} alt="single screen" /></a>
          <a href="" className='split-screen'><img src={splitScreenIcon} alt="split screen" /></a>
        </div>
    </header>
    );
}
export default HeaderMenu;