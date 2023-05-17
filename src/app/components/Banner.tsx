import { motion } from "framer-motion";

const dropIn = {
    initial: {opacity: 0, y: -500},
    animate: {opacity: 1, y: 0},
    ease: "easeIn"
}
const riseIn = {
    initial: {opacity: 0, y: 500},
    animate: {opacity: 1, y: 0},
    ease: "easeIn"
}
const fadeIn = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    ease: "easeIn"
}

export const Banner = () => {
    return(
        <motion.section className="banner"
        {...fadeIn}
        transition={{ duration: 1, delay: 0 }}>
            <div className="hello">
                <motion.h3
                {...dropIn}
                transition={{ duration: 1, delay: 0, type: "spring" }}>
                    Hello, my name is</motion.h3>
                <motion.h2 className="jacob"
                {...dropIn}
                transition={{ duration: 1, delay: 0.2, type: "spring" }}>
                    Jacob</motion.h2>
                <motion.h2 className="blackburn"
                {...dropIn}
                transition={{ duration: 1, delay: 0.4, type: "spring" }}>
                    Blackburn</motion.h2>
            </div>
            <motion.img className="mobile" src={require("../../resources/media/profile.png")} alt="Jacob Blackburn"
            {...fadeIn}
            transition={{ duration: 1.5, delay: 1.2 }}/>
            <motion.div className="based"
            {...riseIn}
            transition={{ duration: 1, delay: 1.5, type: "spring", bounce: 0.1 }}>
                <h3>Doctor turned Developer
                <br/>Based in Essex, GB</h3>
            </motion.div>
        <div id="anchor"></div>
        </motion.section>
    )
}