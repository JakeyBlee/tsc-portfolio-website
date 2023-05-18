import { AnimatePresence, motion } from 'framer-motion';
import { useOutletContext } from "react-router-dom";
import { Workplace } from '../components/Workplace';
import { data } from '../../resources/data/employment';

export const Employment = () => {
    const context : any[] = useOutletContext();
    const isVisible : boolean = context[0] === 'employment';
    const setPage = context[1];

    const handleDrag = (e : any, info : any) => {
        if(info.offset.x < -50){
            setPage('qualifications');
        }
        if(info.offset.x > 50){
            setPage('profile');
        }
    }
    
    return(
        <AnimatePresence>
            {isVisible && <motion.div className="view employment"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag="x"
            dragDirectionLock
            dragSnapToOrigin={true}
            onDrag={handleDrag}>
                <h2 className="title">Work Experience</h2>
                <motion.div className='workplaceArea'
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}>
                    {data.map(workplace =>
                        <Workplace data={workplace} key={workplace.title}/>
                    )}
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    )
}