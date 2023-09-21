
import { useEffect } from "react";
import "./portfolioExample.css"
import { Link } from 'react-router-dom';

const PortfolioCrypto = () => {
   useEffect (() => { window.scrollTo (0, 0); }, [])
   return (
      <Link to={`/pages/weather`} className="portfolio-example">
         <div className="portfolio-example__img-div">
            <div className="portfolio-example__img1"></div>
            <div className="portfolio-example__view">VIEW</div>
         </div>
      </Link>
   )
}

export default PortfolioCrypto