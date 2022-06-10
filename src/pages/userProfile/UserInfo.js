import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { MdExitToApp } from "react-icons/md";
import shoppingCart from "../../images/shopping-cart.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

const UserInfo = () => {
  const userProfileRef = useRef(null);
  return (
    <>
    <div className="bg-gray-100">
      <div className="md:flex container mx-auto px-4 pt-10 pb-20 gap-4">
        <div>
          <div onClick={()=>userProfileRef.current.className= "flex flex-col gap-3"} className="bg-white md:flex flex-col gap-4 rounded-lg pl-6 py-4 mb-5 md:mb-0">
            <div>
              <h1 className="text-2xl">Profilim</h1>
            </div>
            <div ref={userProfileRef} className="hidden md:flex flex-col gap-2">
              <div className="flex items-center gap-4 text-green-500 pr-16 pt-2 md:pt-0">
                <RiShoppingCartLine />
                <p>Sifarişlərim</p>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlineFavoriteBorder />
                <p>Favorilərim</p>
              </div>
              <div className="flex items-center gap-4">
                <AiOutlineUser />
                <Link to='/userDetail'>
                <p>Şəxsi məlumatlar</p>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <GrLocation />
                <p>Çatdırılma ünvanı</p>
              </div>
              <div className="flex items-center gap-4">
                <MdExitToApp />
                <Link to='/login'><p>Çıxış</p></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold md:py-2">Sifarişlərim</h3>
          </div>
          <div className="bg-white w-full flex flex-col items-center p-3 text-gray-400 md:p-20 gap-10">
            <img src={shoppingCart} />
              <p>Səbətinizdə hazırda heç bir sifarişiniz yoxdur</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserInfo;
