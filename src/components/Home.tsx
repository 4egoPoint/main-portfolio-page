
import HomeMe from "./HomeMe"
import PortfolioList from "./PortfolioList"
import "./home.css"


const Home = () => {
   return (
      <div className="home">
         <div className="home__wrapper">
            <HomeMe />

            <PortfolioList />

         </div>
      </div>
   )
}

export default Home