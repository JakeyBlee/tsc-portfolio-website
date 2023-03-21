export const Header = () => {
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
    return (
        <header className='header'>
            {/* Logo */}
            <div className='pageInfo'>
                <img alt='page icon' className='pageIcon' src={require(`../../resources/media/thumbnail.png`)}/>
                <h1 className='siteName'>Jacob Blackburn</h1>
            </div>

            {/* Theme Button */}
            <div className='themeSlider'>
                <img alt='theme slider' onClick={handleTheme} src={require("../../resources/media/themeslider.png")}/>
            </div>
        </header>
    )
}