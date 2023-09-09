
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Experience from "./components/Experience";

function App() {
   return (
      <div className="app">
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Layout />}>
                     <Route index element={<Home />} />
                     <Route path="experience" element={<Experience />} />
                  </Route>
               </Routes>
            </BrowserRouter>
      </div>
   );
}

export default App;
