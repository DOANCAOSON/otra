import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-regal-blue w-[100%]">
      <div className="flex justify-between items-center  text-center w-[998px] h-[61px] m-auto ">
        <div className="flex w-[50%] gap-[80px]">
          <Link to="/contact">Giới thiệu</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/news">Tin tức</Link>
        </div>
        <div className="flex justify-center w-[10%] ">
          <Link to="/">
            <div className="w-[60px] h-[60px] bg-black rounded-full "></div>
          </Link>
        </div>
        <div className="flex w-[50%] justify-end gap-[80px]">
          <a className="">Hình ảnh</a>
          <Link to="/hiring" className="">
            Tuyển Dụng
          </Link>
          <a className=" ">Liên hệ</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
