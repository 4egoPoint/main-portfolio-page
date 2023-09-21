
import { useParams } from "react-router-dom";
import "./itemPage.css"
import { useEffect, useState } from 'react';

type PagesDataType = {
   name?: string,
   teh?: string[],
   description?: string,
   gitLink?: string,
   mainLink?: string,
}

const ItemPage = () => {
   const [currentPageData, setCurrentPageData] = useState<PagesDataType>()
   const { id } = useParams()

   useEffect(() => {
      if (id === "weather") {
         setCurrentPageData({
            name: "Weather",
            teh: ["typescript", "react", "redux", "css", "html", "rest API"],
            description: "Weather app is a project that use API. On this site you can find out the weather of your city or any other city you want",
            gitLink: "https://github.com/4egoPoint/new-weather-app",
            mainLink: "",
         })
      } else if (id === "crypto") {
         setCurrentPageData({
            name: "Crypto Bounty",
            teh: ["typescript", "react", "css", "html", "rest API"],
            description: "Crypto Bounty is a project that use API. When you visit the site, you can browse the offered cryptocurrencies or find it by name. You can also view Chart for a selected time period.",
            gitLink: "https://github.com/4egoPoint/crypto-app",
            mainLink: "",
         })
      }
      window.scrollTo(0, 0);
   }, [])

   return (
      <div className="item-page">
         <div className="item-page__content">
            {id === "weather" ?
               (
                  <div className="item-page__img-weather item-page__img"></div>
               ) : (
                  <div className="item-page__img-crypto item-page__img"></div>
               )}
            <div className="item-page__btn-row">
               <a target="_blank" href={currentPageData?.gitLink} className="item-page__btn-code">View Code</a>
               <a target="_blank" href={currentPageData?.mainLink} className="item-page__btn-site">View Project</a>
            </div>
            <div className="item-page__description">
               <div className="item-page__title">Description</div>
               <div className="item-page__text">
                  {currentPageData?.description}
               </div>
            </div>
            <div className="item-page__skills">
               <h3 className="item-page__skills-title">Skills Used In This Project</h3>
               <div className="item-page__skills-row">
                  {currentPageData?.teh?.map((one) => {
                     return <div className="item-page__skills-skill">{one}</div>
                  })}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ItemPage