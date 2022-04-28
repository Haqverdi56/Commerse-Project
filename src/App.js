import HomePage from "./pages/homepage/HomePage"
import Category from "./pages/category/Category";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Basket from "./pages/basket/Basket"

import {
  Routes ,
  Route 
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Routes >
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/test" element={ <Category/>}/>
        <Route path="/basket" element= {<Basket/>}/>
      </Routes >
      <Footer/>
    </div>
  );
}

export default App;