export const Footer = () => {
    return(
        <footer className="footer">
            <h3>Contact me</h3>
                <div className="icons">  
                    <a href="https://www.linkedin.com/in/jacob-blackburn-877b9712b/" target="_blank"><img src={require("../../resources/media/linkedin.png")} alt="Linkedin"/></a>
                    <a href="https://github.com/JakeyBlee" target="_blank"><img src={require("../../resources/media/github.png")} alt="Github"/></a>
                    <a href="mailto:jakeyblee@gmail.com" target="_blank"><img src={require("../../resources/media/email.png")} alt="Email"/></a>
                </div>
        </footer>
    )
}