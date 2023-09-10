
import { motion } from "framer-motion"
import "./homeMe.css"
import { useEffect } from "react";

const HomeMe = () => {
   useEffect (() => { window.scrollTo (0, 0); }, [])
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
               <img className="section-first__img" src={require('../img/avatar.jpg')} alt="avatar" />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia, excepturi vitae animi ex numquam?
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
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sed ducimus at consequatur minima accusamus nostrum voluptatem atque sint perferendis laboriosam, asperiores nemo repudiandae odio quibusdam, quo quae impedit qui doloribus aspernatur vitae possimus cum, nulla accusantium. Numquam, totam iusto.
            </motion.div>

         </div>
      </div>
   )
}

export default HomeMe