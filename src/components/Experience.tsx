import { motion, useInView, useAnimation } from "framer-motion"
import { BiLogoReact, BiLogoRedux, BiLogoJavascript, BiSolidFileCss, BiSolidFileHtml, BiLogoTypescript, } from 'react-icons/bi'
import "./experience.css"
import { useEffect, useRef } from "react"

const Experience = () => {
   useEffect (() => { window.scrollTo (0, 0); }, [])

   const ref = useRef(null)
   const ref1 = useRef(null)
   const ref2 = useRef(null)

   const isInView = useInView(ref, {once:true})
   const is1InView = useInView(ref1, {once:true})
   const is2InView = useInView(ref2, {once:true})


   const mainControls = useAnimation()
   const mainControls1 = useAnimation()
   const mainControls2 = useAnimation()


   useEffect(() => {
      if(isInView) {
         mainControls.start("visible")
      }
      if(is1InView) {
         mainControls1.start("visible")
      }      
      if(is2InView) {
         mainControls2.start("visible")
      }
   },[isInView,is1InView,is2InView])

   return (
      <div className='experience'>
         <h1 className='experience__title'>skills</h1>
         <div className="experience__colum">
            <motion.a  ref={ref}
               variants={{
                  hidden: { opacity: 0, x: 1000 },
                  visible: { opacity: 1, x: 0 }
               }}
               initial="hidden"
               animate={mainControls}
               transition={{ duration: 0.5, delay: 0.25 }}
               target="_blank" href='https://en.wikipedia.org/wiki/React_(software)' className="experience__skill-item skill-item">
               <h2 className="skill-item__title"><BiLogoReact /><span>React</span></h2>
               <div className="skill-item__text">
                  React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
               </div>
            </motion.a>

            <motion.a
               variants={{
                  hidden: { opacity: 0, x: -1000 },
                  visible: { opacity: 1, x: 0 }
               }}
               initial="hidden"
               animate={mainControls}
               transition={{ duration: 0.5, delay: 0.25 }}
               target="_blank" href='https://en.wikipedia.org/wiki/Redux_(JavaScript_library)' className="experience__skill-item skill-item1">
               <h2 className="skill-item1__title"><BiLogoRedux /><span>Redux</span></h2>
               <div className="skill-item__text">
                  Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.
               </div>
            </motion.a>

            <motion.a   ref={ref1}
               variants={{
                  hidden: { opacity: 0, x: 1000 },
                  visible: { opacity: 1, x: 0 }
               }}
               initial="hidden"
               animate={mainControls1}
               transition={{ duration: 0.5, delay: 0.25 }}
               target="_blank" href='https://en.wikipedia.org/wiki/JavaScript' className="experience__skill-item skill-item">
               <h2 className="skill-item__title"><BiLogoJavascript /><span>JavaScript</span></h2>
               <div className="skill-item__text">
                  JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.
               </div>
            </motion.a>

            <motion.a
               variants={{
                  hidden: { opacity: 0, x: -1000 },
                  visible: { opacity: 1, x: 0 }
               }}
               initial="hidden"
               animate={mainControls1}
               transition={{ duration: 0.5, delay: 0.25 }}
               target="_blank" href='https://en.wikipedia.org/wiki/TypeScript' className="experience__skill-item skill-item1">
               <h2 className="skill-item1__title"><BiLogoTypescript /><span>TypeScript</span></h2>
               <div className="skill-item__text">
                  TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.[5] Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.
               </div>
            </motion.a>

            <motion.a   ref={ref2}
               variants={{
                  hidden: { opacity: 0, x: 1000 },
                  visible: { opacity: 1, x: 0 }
               }}
               initial="hidden"
               animate={mainControls2}
               transition={{ duration: 0.5, delay: 0.25 }}
               target="_blank" href='https://en.wikipedia.org/wiki/HTML' className="experience__skill-item skill-item">
               <h2 className="skill-item__title"><BiSolidFileHtml /><span>HTML</span></h2>
               <div className="skill-item__text">
                  The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
               </div>
            </motion.a>

            <motion.a
               variants={{
                  hidden: { opacity: 0, x: -1000 },
                  visible: { opacity: 1, x: 0 }
               }}
               initial="hidden"
               animate={mainControls2}
               transition={{ duration: 0.5, delay: 0.25 }}
               target="_blank" href='https://en.wikipedia.org/wiki/CSS' className="experience__skill-item skill-item1">
               <h2 className="skill-item1__title"><BiSolidFileCss /><span>CSS</span></h2>
               <div className="skill-item__text">
                  Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).
               </div>
            </motion.a>

         </div>
      </div>
   )
}

export default Experience