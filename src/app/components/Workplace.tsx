import { Employment } from "../../resources/data/employment";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Workplace = (props : {data: Employment}) => {
    let skillList = props.data.skills;
    const [moreInfo, setMoreInfo] = useState(false);
    const [skills, changeSkills] = useState(skillList);

    const handleClick = () : void => {
        setMoreInfo(!moreInfo);
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
            <h3 className="jobTitle">{ props.data.title }</h3>
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
            
            <div className="intro">
                <div>
                    <h4>Job Title:</h4>
                    <p>{props.data.title}</p>
                </div>
                <div>
                    <h4>Organization:</h4>
                    <p>{props.data.organization}</p>
                </div>
            </div>

            <AnimatePresence mode="popLayout">
            <motion.div className="jobText" style={{transition: "none"}}>
                
                <h4>Description:</h4>
                {moreInfo && props.data.description.map(paragraph => (
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

            <div className='showMore' onClick={handleClick}>
               <p>&#60;Show {moreInfo ? 'Less' : 'More'} /&#62;</p>
            </div>            
        </div>
    )
}