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
                    <p className='text'>Hello, my name is <span>Jacob Blackburn</span> - a Software Developer at <span>Good Growth.</span></p>
                    <p className='text'>Prior to my current role, I worked as an <span>NHS doctor</span> with around four years front-line experience in a wide range of medical and surgical fields spanning both primary and secondary care. As I progressed through this career however, I knew that my interests and aspirations lay <span>outside</span> of medicine..</p>
                    <p className='text'>I took it upon myself to make a change, and so alongside working as a doctor I retrained myself in <span>Full-Stack Software Development</span>. After a year of self-taught education and online courses, I was fortunate enough to land my first <span>Software Development</span> role.</p>
                    <p className='text'>I currently work in an <span>agile</span> team of developers who work with <span>globally reknowned</span> clients to innovate within their legacy technologies at speed. I am regularly involved in delivering <span>production standard</span> code through the use of our in-house <span>React.js</span> software, and also lead regular client calls detailing the <span>technical implementation</span> of upcoming projects.</p>
                    <p className='text'>Read more about my past work in the <span className='code'>&#60;Employment /&#62;</span> section above. My experience levels for different technologies are listed in the <span className='code'>&#60;Qualifications /&#62;</span> section linked above, but I am always more than happy to learn new skills, technologies or languages if required.</p>
                </motion.div>
                <div className='buttonContainer'>
                    <a href={require('../../resources/docs/cv.pdf')} target="_blank" rel="noreferrer">
                        <button className='viewCv'>View CV</button>
                    </a>
                </div>
                <img className="desktop" src={require("../../resources/media/profile.png")} alt="Jacob Blackburn"/>
            </motion.div>}
        </AnimatePresence>
    )
}