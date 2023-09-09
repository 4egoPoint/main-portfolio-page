

import "./portfolioExample.css"
import { Link } from 'react-router-dom';

const PortfolioExample = () => {
   return (
      <Link to="#" className="portfolio-example">
         <div className="portfolio-example__img-div">
            <img src={require("../../img/site.jpg")} alt="page" className="portfolio-example__img"></img>
         </div>
      </Link>
   )
}

export default PortfolioExample