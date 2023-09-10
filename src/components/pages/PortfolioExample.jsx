

import { useEffect } from "react";
import "./portfolioExample.css"
import { Link } from 'react-router-dom';

const PortfolioExample = ({ path }) => {
   useEffect (() => { window.scrollTo (0, 0); }, [])
   return (
      <Link to={path} className="portfolio-example">
         <div className="portfolio-example__img-div">
            <div className="portfolio-example__img"></div>
            <div className="portfolio-example__view">VIEW</div>
         </div>
      </Link>
   )
}

export default PortfolioExample
//            <img src={require("../../img/site.jpg")} alt="page" className="portfolio-example__img"></img>