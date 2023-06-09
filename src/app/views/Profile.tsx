import { AnimatePresence, motion } from 'framer-motion';
import { useOutletContext } from "react-router-dom";

export const Profile = () => {
    const context : any[] = useOutletContext();
    const isVisible : boolean = context[0] === 'profile';
    const setPage = context[1];

    const handleDrag = (e : any, info : any) => {
        if(info.offset.x < -50){
            setPage('employment');
        }
        if(info.offset.x > 50){
            setPage('projects');
        }
    }

    return(
        <AnimatePresence>
            {isVisible && <motion.div className="view profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag="x"
            dragDirectionLock
            dragSnapToOrigin={true}
            onDrag={handleDrag}>
                <h2 className="title">About Me</h2>
                <motion.div className='textArea'
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}>
                    <p className='text'>Hello, my name is <span>Jacob Blackburn!</span></p>
                    <p className='text'>I am an <span>NHS doctor</span> with around four years front-line experience in a wide range of medical and surgical fields spanning both primary and secondary care. Despite this background, my main passion and personal interests lie in <span>technology</span> and <span>software development</span>.</p>
                    <p className='text'>Over the past few years I have been exploring the possibility of an alternate career in <span>Full-Stack Software Development</span> and have completed a number of projects detailed in the <span className='code'>&#60;Projects /&#62;</span> section of this site. My primary language is <span>JavaScript</span> or <span>TypeScript</span>, but I also have experience with <span>Python</span>. My ideal employment sector would be HealthTech so that my medical background could be of greater value.</p>
                    <p className='text'>Read more about my past work in the <span className='code'>&#60;Employment /&#62;</span> section above. My experience levels for different technologies are listed in the <span className='code'>&#60;Qualifications /&#62;</span> section linked above, but I would be more than happy to learn new skills or stacks for potential jobs if given the opportunity.</p>
                <div className='buttonContainer'>
                    <a href={require(`../../resources/docs/cv.pdf`)} target="_blank">
                        <button className='viewCv'>View CV</button>
                    </a>
                </div>
                </motion.div>
                <img className="desktop" src={require("../../resources/media/profile.png")} alt="Jacob Blackburn"/>
            </motion.div>}
        </AnimatePresence>
    )
}