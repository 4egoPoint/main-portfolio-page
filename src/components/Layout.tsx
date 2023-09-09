
import "./layout.css"
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";

const Layout = () => {
   return (
      <>
         <div className="app-a">
            <div className="app__header">
               <Header />
            </div>
            <div className="app__main-content">
               <Outlet />
            </div>
            <div className="app__footer">
               <Footer />
            </div>
         </div>
      </>
   )
}

export default Layout