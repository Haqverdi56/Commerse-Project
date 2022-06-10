import { useEffect, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { MdExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { BsPencilSquare } from 'react-icons/bs'

function getFormValues() {
	const storedValues = localStorage.getItem('form');
	if (!storedValues)
		return {
      name: "",
      surname: "",
      email: "",
      tel: "",
      date: ""
		};
	return JSON.parse(storedValues);
}

const UserDetail = () => {
  const [inputValues, setInputValues] = useState(getFormValues)
  const userProfileRef = useRef(null);

  useEffect(()=>{
    localStorage.setItem('form', JSON.stringify(inputValues));
  }, [inputValues]);

  function onSubmit(e) {
    e.preventDefault();
    alert("Məlumatlarınız yadda saxlanıldı")
  }
  function handleChange(e) {
    setInputValues((previousValue)=>({
      ...previousValue,
      [e.target.name]: e.target.value
    }))
  }
  console.log(inputValues)
  return (
    <>
    <div className="bg-gray-100">
      <div className="md:flex container mx-auto px-4 pt-10 pb-20 gap-4">
        <div>
          <div className="bg-white flex flex-col gap-4 rounded-lg pl-6 py-4">
            <div onClick={()=>userProfileRef.current.className= "flex flex-col gap-3"}>
              <h1 className="text-2xl">Profilim</h1>
            </div>
            <div ref={userProfileRef} className="hidden md:flex flex-col gap-3">
              <div  className="flex items-center gap-4 pr-16">
                <RiShoppingCartLine />
                <Link to='/userInfo'><p>Sifarişlərim</p></Link>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlineFavoriteBorder />
                <p>Favorilərim</p>
              </div>
              <div className="flex items-center text-green-500 gap-4">
                <AiOutlineUser />
                <p>Şəxsi məlumatlar</p>
              </div>
              <div className="flex items-center gap-4">
                <GrLocation />
                <p>Çatdırılma ünvanı</p>
              </div>
              <div className="flex items-center gap-4">
                <MdExitToApp />
                <p>Çıxış</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-5 md:pt-0">
          <div>
            <h3 className="text-xl font-semibold md:py-2">Şəxsi məlumatlar</h3>
          </div>
          <div className="bg-white p-4 mt-3 md:mt-0">
            <form onSubmit={onSubmit} action="">
              <div className="md:flex gap-4">
                <div className="md:w-3/6">
                  <p>Ad</p>
                  <input className="bg-gray-200 rounded-lg p-1 py-2 pl-2 mt-2 outline-none w-full" value={inputValues.name} onChange={handleChange} type="text" name="name" placeholder="Ad"/>
                </div>
                <div className="md:w-3/6">
                  <p>Soyad</p>
                  <input className="bg-gray-200 rounded-lg p-1 py-2 pl-2 mt-2 outline-none w-full" value={inputValues.surname} onChange={handleChange} type="text" name="surname" placeholder="Soyad"/>
                </div>
              </div>
              <div className="md:flex gap-4 mt-4">
                <div className="md:w-3/6">
                  <p>E-mail</p>
                  <input className="bg-gray-200 rounded-lg p-1 py-2 pl-2 mt-2 outline-none w-full" value={inputValues.email} onChange={handleChange} type="text" name="email" placeholder="E-mail"/>
                </div>
                <div className="md:w-3/6">
                  <p>Mobil nömrə</p>
                  <input className="bg-gray-200 rounded-lg p-1 py-2 pl-2 mt-2 outline-none w-full" value={inputValues.tel} onChange={handleChange} type="tel" name="tel"  placeholder="Mobil nömrə"/>
                </div>
              </div>           
              <div className="mt-4">
                <div className="md:w-3/6">
                  <p>Doğum tarixi</p>
                  <input className="bg-gray-200 rounded-lg p-1 py-2 pl-2 mt-2 outline-none w-full" value={inputValues.date} onChange={handleChange} type="date" name="date" placeholder="Doğum tarixi"/>
                </div>
              </div>
              <div className="w-full flex justify-center mt-5">
                <button className="w-68 flex items-center gap-2 bg-green-500 text-white md:px-20 px-10 py-2 rounded-lg"><BsPencilSquare/>Məlumatları yenilə</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserDetail;
