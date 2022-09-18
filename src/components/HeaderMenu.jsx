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
        <a href="" className='toolbox'>Toolbox</a>
    </header>
    );
}
export default HeaderMenu;