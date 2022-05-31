import HomePage from "./pages/homepage/HomePage"
import Category from "./pages/category/Category";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Basket from "./pages/basket/Basket"
import Registration from "./pages/registration/Registration";
import UserInfo from "./pages/userProfile/UserInfo";
import Login from "./pages/login/Login";
import ProductAbout from './pages/productAbout/ProductAbout'
import { Routes, Route } from "react-router-dom";
import UserDetail from "./pages/userDetail/UserDetail"

function App() {
  return (
    <div>
      <Header/>
      <Routes >
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/category/:name" element={ <Category/>}/>
        <Route path="/basket" element= {<Basket/>}/>
        <Route path="/productAbout/:id" element= {<ProductAbout/>}/>
        <Route path="/userInfo" element= {<UserInfo/>}/>
        <Route path="/userDetail" element= {<UserDetail/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/registration" element= {<Registration/>}/>
      </Routes >
      <Footer/>
    </div>
  );
}

export default App;