
import { motion } from "framer-motion"
import "./homeMe.css"
import { useEffect } from "react";

const HomeMe = () => {
   useEffect(() => { window.scrollTo(0, 0); }, [])
   return (
      <div className="home__section-first section-first">
         <div className="section-first__wrapper">
            <motion.div
               variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 }
               }}
               initial="hidden"
               animate="visible"
               transition={{ duration: 0.5, delay: 0.25 }}
               className="section-first__img-div">
               <div className="section-first__img" ></div>
            </motion.div>
            <motion.div
               variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 }
               }}
               initial="hidden"
               animate="visible"
               transition={{ duration: 0.5, delay: 0.25 }}
               className="section-first__content">
               <h1 className="section-first__title">Front end <br />Developer</h1>
               <div className="section-first__text">
                  I'm Frontend Developer, use React to create amazing UI on websites for clients.
               </div>
            </motion.div>
         </div>
         <div className="section-first__about">
            <motion.div
               variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 }
               }}
               initial="hidden"
               animate="visible"
               transition={{ duration: 0.5, delay: 0.25 }}
               className="section-first__about-text">
               I have already created many
               projects using current technologies. My goal is to create great sites for users
               so that everyone enjoys browsing the site. My projects are fully responsive to any device. Also, my goal is to
               become a Senior as soon as possible and I'm ready to work on what.
            </motion.div>

         </div>
      </div>
   )
}

export default HomeMe