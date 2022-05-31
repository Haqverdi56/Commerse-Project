import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { MdExitToApp } from "react-icons/md";
import shoppingCart from "../../images/shopping-cart.png";
import { Link } from "react-router-dom";

const UserInfo = () => {
  return (
    <>
    <div className="bg-gray-100">
      <div className="md:flex container mx-auto px-4 pt-10 pb-20 gap-4">
        <div className="">
          <div className="bg-white hidden  md:flex flex-col gap-4 rounded-lg pl-6 py-4">
            <div>
              <h1 className="text-2xl">Profilim</h1>
            </div>
            <div className="flex items-center gap-4 text-green-500 pr-16">
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
        <div className="w-full">
          <div>
            <h3 className="text-xl font-semibold md:py-2">Sifarişlərim</h3>
          </div>
          <div className="bg-white w-full flex flex-col items-center text-gray-400 md:p-20 gap-10">
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
