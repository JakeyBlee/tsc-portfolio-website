import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import { data } from '../../resources/data/qualifications';
import { Result } from '../components/Result';

export const Qualifications = () => {
    const [filters, setFilters] = useState('all')
    const context : any[] = useOutletContext();
    const isVisible : boolean = context[0] === 'qualifications';
    const setPage = context[1];
    
    const handleFilter = (e : any) : void => {
        document.getElementsByClassName("filter active")[0].className = "filter";
        e.target.className = "filter active";
        const target : string = e.target.innerHTML.toLowerCase();
        setFilters(target);
    }

    const handleDrag = (e : any, info : any) => {
        if(info.offset.x < -50){
            setPage('projects');
        }
        if(info.offset.x > 50){
            setPage('employment');
        }
    }

    return(
        <AnimatePresence>
            {isVisible && <motion.div className="view qualifications"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            drag="x"
            dragDirectionLock
            dragSnapToOrigin={true}
            onDrag={handleDrag}>
                <h2 className="title">Qualifications</h2>
                <div className='filterButtons'>
                    <button className='filter active' onClick={handleFilter}>All</button>
                    <button className='filter' onClick={handleFilter}>Degrees</button>
                    <button className='filter' onClick={handleFilter}>Certificates</button>
                    <button className='filter' onClick={handleFilter}>Additional</button>
                </div>
                {(filters === 'all' || filters === 'degrees') && <motion.div className='section' layout
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}>
                    <h3>Degree Level Qualifications</h3>
                    {data.flatMap(data => data.type === 'degree' && (
                        <Result data={data} key={data.title}/>
                    )) }
                </motion.div>}
                {(filters === 'all' || filters === 'certificates') && <motion.div className='section' layout
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}>
                    <h3>Professional Certificates</h3>
                    {data.flatMap(data => data.type === 'cert' && (
                        <Result data={data} key={data.title}/>
                    )) }
                </motion.div>}
                {(filters === 'all' || filters === 'additional') && <motion.div className='section' layout
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}>
                    <h3>School Qualifications</h3>
                    {data.flatMap(data => data.type === 'other' && (
                        <Result data={data} key={data.title}/>
                    )) }
                </motion.div>}
            </motion.div>}
        </AnimatePresence>
    )
}