import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { MdExitToApp } from "react-icons/md";
import shoppingCart from "../../images/shopping-cart.png";
import { Link } from "react-router-dom";

const UserDetail = () => {
  return (
    <>
    <div className="bg-gray-100">
      <div className="md:flex container mx-auto px-4 pt-10 pb-20 gap-4">
        <div className="">
          <div className="bg-white flex flex-col gap-4 rounded-lg pl-6 py-4">
            <div>
              <h1 className="text-2xl">Profilim</h1>
            </div>
            <div className="flex items-center gap-4 pr-16">
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
        <div className="w-full">
          <div>
            <h3 className="text-xl font-semibold md:py-2">Şəxsi məlumatlar</h3>
          </div>
          <div className="bg-white w-4/6">
            <div className="flex gap-4">
              <div>
                <p>Ad</p>
                <input className="bg-gray-200 rounded-lg p-1" type="text" placeholder="Ad"/>
              </div>
              <div>
                <p>Soyad</p>
                <input className="bg-gray-200 rounded-lg p-1" type="text" placeholder="Soyad"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserDetail;
