import React, { useState } from "react";
import loginImage from "../../images/loginpageimg.png"
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom";
import Commerce from "@chec/commerce.js";

const Login = () => {
  const [emailVal, setEmailVal] = useState();

  // const handleEmail = (e) => {
  //   setEmailVal(e.target.value)
  // }

  // console.log(emailVal);

  async function loginCustomer() {
    const commerce = new Commerce(process.env.REACT_APP_CHECK_PUBLIC_API_KEY);
    let response = await commerce.customer.login(emailVal, "http://localhost:3000/");
    console.log(response);
    return response;
  }

  return (
    <>
      <div className="container mx-auto px-4 flex justify-around md:my-20">
          <div className="flex flex-col gap-5 text-center">
              <h1 className="text-2xl">Daxil ol</h1>
              <div className="flex gap-8 justify-center">
                  <p className="flex items-center"><FaFacebook className="text-blue-500 text-2xl"/> Facebook ilə</p>
                  <p className="flex items-center"><FcGoogle className="text-blue-500 text-2xl"/> Google ilə</p>
              </div>
                  <p>və ya</p>
              <div className="md:flex md:flex-col md:gap-3">
                <div>
                    <p>E-mail</p>
                    <input onChange={(e)=>setEmailVal(e.target.value)} className="bg-gray-200 text-black  md:p-1 md:pl-2 md:pr-6 rounded-lg" type="email" placeholder="nümunə@gmail.com" />
                </div>
              </div>
              <div><button onClick={loginCustomer} className="bg-green-500 text-white md:px-16 md:py-2 rounded-lg w-full">Daxil ol</button></div>
          </div>
          <div>
            <img className="hidden md:block" src={loginImage} alt="" />
            <Link to="/registration "><p>Qeydiyyatdan keçin</p></Link>
          </div>
      </div>
    </>
  );
};

export default Login;
