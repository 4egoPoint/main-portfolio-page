

import PortfolioExample from "./pages/PortfolioExample"
import "./portfolioList.css"


const PortfolioList = () => {
   return (
      <div className="home__section-second section-second">
         <div className="section-second__wrapper">
            <h2 className="section-second__title">My projects</h2>
            <div className="section-second__list">

               <PortfolioExample path={"/itemPage1"} />
               <PortfolioExample path={"/itemPage1"} />
               <PortfolioExample path={"/itemPage1"} />
               <PortfolioExample path={"/itemPage1"} />
               <PortfolioExample path={"/itemPage1"} />
               <PortfolioExample path={"/itemPage1"} />

            </div>
         </div>
      </div>
   )
}

export default PortfolioList