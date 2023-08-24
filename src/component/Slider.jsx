import img1 from "../images/slider1.png";

const Slider1 = () => {
  return (
    <div className="flex w-[100%] h-[739px] relative">
          <div className="w-[50%] h-[100%] bg-zinc-500">
            <div className="mt-[153px] ml-[120px] text-text-#0000 text-left">
              <div className="w-[226px] text-4xl">
                Câu chuyện thương hiệu
              </div>
              <div className="w-[410px] text-lg">
                Lorem ipsum dolor sit amet consectetur.
                Lobortis convallis volutpat proin nunc
                nullam ac enim. Lorem ipsum dolor sit amet
                consectetur. Lobortis convallis volutpat
                proin nunc nullam ac enim.
              </div>
            </div>
          </div>
          <div className="w-[50%] h-[100%] bg-amber-200">
            <div className="mt-[390px]  ml-[183px] text-text-#0000 text-left">
              <div className="w-[226px] text-4xl">
                Câu chuyện thương hiệu
              </div>
              <div className="w-[410px] text-lg">
                Lorem ipsum dolor sit amet consectetur.
                Lobortis convallis volutpat proin nunc
                nullam ac enim. Lorem ipsum dolor sit amet
                consectetur. Lobortis convallis volutpat
                proin nunc nullam ac enim.
              </div>
            </div>
          </div>
          <div className=" w-[319px] h-[500px] flex justify-center  absolute top-[90px] left-[50%] translate-x-[-50%] translate-Y-[-90px] z-10 ">
            <img
              className="skake-animation__image--1"
            //   alt="./images/slider1.png"
              src={img1}
            />
          </div>
        </div>
  )
}

export default Slider1