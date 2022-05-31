import React from "react";
import loginImage from "../../images/loginpageimg.png"
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom";

const Registration = () => {
  const AddUser = async (e) => {
    e.preventDefault();
        // console.log(e.target[3].value);
        const url = new URL("https://api.chec.io/v1/customers");
        const SecretApiKey = process.env.REACT_APP_CHECK_SECRET_API_KEY;
        let headers = {
          "X-Authorization": SecretApiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        };
        let body = {
          email: `${e.target[2].value}`,
          phone: `${e.target[3].value}`,
          firstname: `${e.target[0].value}`,
          lastname: `${e.target[1].value}`,
          external_id: null,
        };
        let customer = await fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        });
      };
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
                <form onSubmit={(e)=>AddUser(e)} action="">
                  <div className="md:flex md:flex-col md:gap-3">
                    <div>
                        <p>Ad</p>
                        <input name="ad" className="bg-gray-200 text-black  md:p-1 md:pl-2 md:pr-6 rounded-lg" type="text" placeholder="nümunə@gmail.com" />
                    </div>
                    <div>
                        <p>Soyad</p>
                        <input name="soyad" className="bg-gray-200 text-black  md:p-1 md:pl-2 md:pr-6 rounded-lg" type="text" placeholder="nümunə@gmail.com" />
                    </div>
                    <div>
                        <p>E-mail</p>
                        <input className="bg-gray-200 text-black  md:p-1 md:pl-2 md:pr-6 rounded-lg" type="email" placeholder="nümunə@gmail.com" />
                    </div>
                    <div>
                        <p>Telefon</p>
                        <input className="bg-gray-200 text-black  md:p-1 md:pl-2 md:pr-6 rounded-lg" type="number" placeholder="nümunə@gmail.com" />
                    </div>
                    <div>
                        <input type="checkbox" /> <span>İstifadəçi qaydaları ilə razıyam</span>
                    </div>
                  </div>
                <div>
                    <button type="submit" className="bg-green-500 text-white md:px-16 md:py-2 rounded-lg w-full">Qeydiyyatdan keç</button>
                </div>
                </form>
            </div>
          <div>
            <img className="hidden md:block" src={loginImage} alt="" />
            <Link to="/login "><p>Artıq hesabınız var?</p></Link>
          </div>
      </div>
    </>
  );
};

export default Registration;
