
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Experience from "./components/Experience";
import ItemPage from "./components/pages/ItemPage";

function App() {
   return (
      <div className="app">
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Layout />}>
                     <Route index element={<Home />} />
                     <Route path="experience" element={<Experience />} />
                     <Route path="itemPage1" element={<ItemPage />} />
                  </Route>
               </Routes>
            </BrowserRouter>
      </div>
   );
}

export default App;
