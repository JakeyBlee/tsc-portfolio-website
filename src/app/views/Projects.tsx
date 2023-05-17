import { AnimatePresence, motion } from 'framer-motion';
import { useOutletContext } from "react-router-dom";
import { data } from '../../resources/data/projects';
import { Project } from '../components/Project';

export const Projects = () => {
    const context : any[] = useOutletContext();
    const isVisible : boolean = context[0] === 'projects';
    const setPage = context[1];

    const handleDrag = (e : any, info : any) => {
        if(info.offset.x < -50){
            setPage('profile');
        }
        if(info.offset.x > 50){
            setPage('qualifications');
        }
    }

    return(
        <AnimatePresence>
            {isVisible && <motion.div className="view projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag="x"
            dragDirectionLock
            dragSnapToOrigin={true}
            onDrag={handleDrag}>
                <h2 className="title">Past Projects</h2>
                <motion.div className='projectContainer'
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}>
                    {data.map(data => 
                        <Project data={data} key={data.title}/>
                    )}
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    )
}