import { BsLinkedin, BsGithub } from 'react-icons/bs';

import "./footer.css"

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__row">
            <a href="https://www.linkedin.com/in/pavlo-sokolvskyi-078958280" target="_blank" className='footer__link'>
               <BsLinkedin size= "20px" className='footer__icon' />
            </a>
            <a href="https://github.com/4egoPoint" target="_blank" className='footer__link'>
               <BsGithub size= "20px" className='footer__icon' />
            </a>
         </div>

      </div>
   )
}

export default Footer