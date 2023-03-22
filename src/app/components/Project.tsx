import { ProjectType } from "../../resources/data/projects"
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Project = (props: {data: ProjectType}) => {
    let techList = props.data.technologies;
    const [techs, changeTechs] = useState(techList);

    useEffect(() => {
        const interval = setInterval(() => {
            const temp = techList[0];
            techList.shift();
            changeTechs([...techList]);
            setTimeout(() => {
                techList.push(temp);
                changeTechs([...techList]);
            }, 3000);
        }, 1500);
        return () => clearInterval(interval);
    }, []);
    
    return(
        <div className="project">
            <div className="techInfo">
                <h4 className="title">{props.data.title}</h4>
                <div className="dateInfo">
                    <h5>Build Date:</h5>
                    <p>{props.data.buildDate}</p>
                </div>
            </div>
            <div className="siteLink">
                <img alt="Website Preview" src={require(`../../resources/media/${props.data.image}`)} />
            </div>
            <div className="techWindow">
                <div className="techContainer">
                    <AnimatePresence mode="popLayout" initial={false}>
                    {techs.map(tech => (
                        <motion.p
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ease: 'linear', duration: 1.5, opacity: {duration: 0.5}}}
                        key={tech}
                        className='tech'>{tech}</motion.p>
                    ))}
                    </AnimatePresence>
                </div>
            </div>
            <div className="projectText">
                <h5>Description:</h5>
                <p>{props.data.summary}</p>
            </div>
            {(props.data.progress === 'past') &&
            <div className="buttonContainer">
                {props.data.liveSite &&
                <button className="link" onClick={()=>window.open(props.data.liveSite,'_blank')}>See Live Site</button>}
                {props.data.repo &&
                <button className="link" onClick={()=>window.open(props.data.repo,'_blank')}>See Code Repo</button>}
            </div>
            }
        </div>
    )
}