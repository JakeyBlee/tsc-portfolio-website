import { ProjectType } from "../../resources/data/projects"
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Project = (props: {data: ProjectType}) => {
    let techList = props.data.technologies;
    const [techs, changeTechs] = useState(techList);

    useEffect(() => {
        const interval = setInterval(() => {
            const temp = techList[techList.length-1];
            techList.pop();
            changeTechs([...techList]);
            setTimeout(() => {
                techList.unshift(temp);
                changeTechs([...techList]);
            }, 2000);
        }, 1000);
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
            <div className="siteAndTech">
            <div className="siteLink">
                <img alt="Website Preview" src={require(`../../resources/media/${props.data.image}`)} />
                <div className="linkContainer">
                    {props.data.liveSite &&
                    <a href={props.data.liveSite} target="_blank" className="siteText">See Live Site</a>}
                    {props.data.repo &&
                    <a href={props.data.repo} target="_blank" className="repoText">See Code Repo</a>}
                    {(props.data.progress === 'future' || props.data.progress === 'current') && 
                    <p className="siteText">In Development</p>}
                </div>
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
                        transition={{ease: 'linear', duration: 1, opacity: {duration: 0.5}}}
                        key={tech}
                        className='tech'>{tech}</motion.p>
                    ))}
                    </AnimatePresence>
                </div>
            </div>
            </div>

            <div className="projectText">
                <p>{props.data.summary}</p>
            </div>
            
        </div>
    )
}