export const ThemeSlider = () => {
    const handleTheme = () : void => {
        const app = document.getElementById('app')!;
        const currentClass : string = app.classList.toString();
        app.className = "";
        if(currentClass === "light-theme"){
            app.classList.add("dark-theme");
        } else {
            app.classList.add("light-theme");
        }
    }
    return(
        <button className='themeSlider' onClick={handleTheme}>
            <span className='dark'>Dark</span>
            <span className='light'>Light</span>
            <div className='slider'>
                <div className='shading'></div>
                <div className='shadow'></div>
            </div>
            <div className="cloud1"></div>
            <div className="cloud2"></div>
        </button>
    )
}