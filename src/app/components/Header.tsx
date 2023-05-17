import { ThemeSlider } from "./ThemeSlider"

export const Header = () => {
    return (
        <header className='header'>
            {/* Logo */}
            <div className='pageInfo'>
                <img alt='page icon' className='pageIcon' src={require(`../../resources/media/thumbnail.png`)}/>
                <h1 className='siteName'>Jacob Blackburn</h1>
            </div>
            <ThemeSlider />
        </header>
    )
}