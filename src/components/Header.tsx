

import "./header.css"
import { Link } from 'react-router-dom';


export function Header() {
   return (
      <div className="header">
         <nav className="header__row">
            <Link to='/' className="header__text header__text1">Home</Link>
            <Link to='/experience' className="header__text header__text2">Skills</Link>
            <div className="header__text header__text3 header__dropdown-all">
               <div className="header__btn">
                  Contacts
               </div>
               <div className="header__dropdown">
                  <a href="https://www.linkedin.com/in/pavlo-sokolvskyi-078958280" target="_blank">linkedin</a>
                  <a href="https://github.com/4egoPoint" target="_blank">Github</a>
                  <a href="tel:+48739137066">Call me +48739137066</a>
               </div>
            </div>
         </nav>
      </div>
   )
}