import { Employment } from "../../resources/data/employment";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Workplace = (props : {data: Employment}) => {
    let skillList = props.data.skills;
    const [moreInfo, setMoreInfo] = useState(false);
    const [skills, changeSkills] = useState(skillList);

    const handleClick = () : void => {
        setMoreInfo(!moreInfo);
        document.getElementById(props.data.image)?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const temp = skillList[0];
            skillList.shift();
            changeSkills([...skillList]);
            setTimeout(() => {
                skillList.push(temp);
                changeSkills([...skillList]);
            }, 3000);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="workplaceCard">
            <div className="anchor" id={props.data.image}/>
            <h3 className="jobTitle">{props.data.organization}<br/>{props.data.title}</h3>
            <p className="jobDates">{props.data.dateFrom} → {props.data.dateTo}</p>
            <div className="skillsWindow">
                <div className="skillContainer">
                    <AnimatePresence mode="popLayout" initial={false}>
                    {props.data.skills.map(skill => (
                        <motion.p
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ease: 'linear', duration: 1.5, opacity: {duration: 0.5}}}
                        key={skill}
                        className='skill'>{skill}</motion.p>
                    ))}
                    </AnimatePresence>
                </div>
            </div>

            <AnimatePresence mode="popLayout">
            <motion.div className="jobText" style={{transition: "none"}}>
                
                <h4>Description:</h4>
                {moreInfo && props.data.description?.map(paragraph => (
                    <motion.p className='text' key={paragraph}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{opacity: 0}}
                    style={{transition: "none"}}> {paragraph} </motion.p>
                ))
                }

                {!moreInfo && <motion.p className="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}>{props.data.summary}</motion.p>}
            
            </motion.div>
            </AnimatePresence>
            <img src={require(`../../resources/media/${props.data.image}`)} />
            {props.data.description && <div className='buttonContainer'>
                <button className='showMore' onClick={handleClick}>
                Show {moreInfo ? 'Less' : 'More'}
                </button>   
            </div>}
        </div>
    )
}