const Header = () => {
  return (
    <div className="bg-regal-blue w-[100%]">
    <div className="flex justify-between items-center  text-center w-[998px] h-[61px] m-auto ">
      <div className="flex w-[50%] gap-[80px]">
        <a>Giới thiệu</a>
        <a className="">Menu</a>
        <a className="">Tin tức</a>
      </div>
      <div className="flex justify-center w-[10%] ">
        <div className="w-[60px] h-[60px] bg-black rounded-full "></div>
      </div>
      <div className="flex w-[50%] justify-end gap-[80px]">
        <a className="">Hình ảnh</a>
        <a className="">Tuyển Dụng </a>
        <a className=" ">Liên hệ</a>
      </div>
    </div>
  </div>
  )
}

export default Header