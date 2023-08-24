import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import img1 from "./images/slider1.png";
import img2 from "./images/slider2.png";
import img3 from "./images/slider3.png";

function App() {
  const APIFake = [
    {
      id: "1",
      btn: "Button 1",
    },
    {
      id: "2",
      btn: "Button 2",
    },
    {
      id: "3",
      btn: "Button 3",
    },
  ];
  const itembtn = [
    {
      id: "1",
      div: "",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra gravida in sit convallis neque tincidunt augue vitae vitae.",
    },
    {
      id: "2",
      div: "",
      title: "Lorem ipsum1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra gravida in sit convallis neque tincidunt augue vitae vitae.",
    },
    {
      id: "3",
      div: "",
      title: "Lorem ipsum1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra gravida in sit convallis neque tincidunt augue vitae vitae.",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(0);
  const handleItemClick = (index) => {
    setSelectedItem(index);
    setCurrentIndex(index);
  };
  const ref = useRef("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonDisabled, setButtonDisabled] =
    useState(false);
  const images = [
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  ];
  const apiSliderItems = [
    {
      id: "1",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra gravida in sit convallis neque tincidunt augue vitae vitae.",
      img: "http://auntieannes.co.kr/wp-content/uploads/2022/04/%EB%A9%94%EC%9D%B8-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%88%84%EB%81%BC_%EB%A6%AC%EC%B9%98%ED%8B%B0%EC%97%90%EC%9D%B4%EB%93%9C.png",
    },
    {
      id: "2",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra gravida in sit convallis neque tincidunt augue vitae vitae.",
      img: "http://auntieannes.co.kr/wp-content/uploads/2022/04/%EB%A9%94%EC%9D%B8-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%88%84%EB%81%BC_%EB%A6%AC%EC%B9%98%ED%8B%B0%EC%97%90%EC%9D%B4%EB%93%9C.png",
    },
    {
      id: "3",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra gravida in sit convallis neque tincidunt augue vitae vitae.",
      img: "http://auntieannes.co.kr/wp-content/uploads/2022/04/%EB%A9%94%EC%9D%B8-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%88%84%EB%81%BC_%EB%A6%AC%EC%B9%98%ED%8B%B0%EC%97%90%EC%9D%B4%EB%93%9C.png",
    },
  ];
  const handleSlide = (status) => {
    if (!isButtonDisabled) {
      ref.current = status;
      if (status === "next") {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % images.length
        );
      }
      if (status === "prev") {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
      }
      setButtonDisabled(true);

      setTimeout(() => {
        setButtonDisabled(false);
        return () => {
          setButtonDisabled(false);
        };
      }, 501);
    }
  };

  // slider-item
  const data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img1,
    },
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 3,
      img: img3,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const songa = (list) => {
    const newArray = [];
    const chunkSize = 3;

    for (let i = 0; i < list.length; i += chunkSize) {
      newArray.push(list.slice(i, i + chunkSize));
    }
    return newArray;
  };

  return (
    <>
      <div className="">
        {/* header */}
        <div className="bg-regal-blue w-[100%]">
          <div className="flex justify-between items-center  text-center w-[998px] h-[61px] m-auto px-[30px]">
            <div>Giới thiệu</div>
            <div className="">Menu</div>
            <div className="">Tin tức</div>
            <div className="">
              <div className="w-[61px] h-[61px] bg-black rounded-full "></div>
            </div>
            <div className="">Hình ảnh</div>
            <div className="">Tuyển Dụng </div>
            <div className=" ">Liên hệ</div>
          </div>
        </div>
        {/* slider */}
        <div className="flex w-[100%] h-[620px] ">
          <div className="w-[50%] h-[100%]  overflow-hidden">
            <div
              style={{ zIndex: 2 }}
              className="w-[100%] h-[100%] bg-gray-300"
            >
              <motion.img
                key={currentIndex}
                initial={{
                  y: ref.current === "prev" ? -1000 : 1000,
                }} // Di chuyển ảnh ra khỏi màn hình
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                }}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
              />
            </div>
          </div>
          <div className="w-[50%] h-[100%] bg-orange-400">
            1
          </div>
        </div>
        <button
          className="text-boder mr-4"
          onClick={() => handleSlide("next")}
        >
          Next Slide
        </button>
        <button
          className="text-boder"
          onClick={() => handleSlide("prev")}
        >
          Prev Slide
        </button>
        {/* slider-item */}
        <div className="flex w-[100%] h-[110vh] relative">
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
          <div className="skake-ant w-[319px] h-[500px] flex justify-center  absolute top-[90px] left-[50%] translate-x-[-50%] translate-Y-[-90px] z-10 ">
            <img
              className="skake-animation__image--1"
              src="http://www.auntieannes.co.kr/wp-content/uploads/2020/03/product02_hover_1-min.png"
              alt=""
            />
          </div>
        </div>
        {/* bannner */}
        <div>
          <div className="w-[100%] h-[413px]">
            <div className="w-[100%]  h-[100%]">
              <img
                className="w-[100%] h-[100%]"
                src="
            http://auntieannes.co.kr/wp-content/uploads/2019/10/main-sec04_img.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* slider-item */}
        <div className="mt-[96px] flex justify-center text-text-#0000">
          <div className="w-[1200px] h-[auto] pb-[78px] border-b-[1px] border-b-boder">
            <div>
              <div className="flex">
                <div className="m-auto w-[100%]">
                  <div className="mb-[67px]">
                    <h1 className="text-4xl">
                      Các dòng sản phẩm nổi bật
                    </h1>
                  </div>
                  <div>
                    <Slider {...settings}>
                      {songa(data).map(
                        (itemGroup, groupIndex) => (
                          <div key={groupIndex}>
                            {itemGroup.map(
                              (item, index) => (
                                <div
                                  className="flex items-center flex-wrap "
                                  key={index}
                                >
                                  <div
                                    className={`flex w-[500px] items-center`}
                                  >
                                    <div className="w-[173px] h-[278px] mr-[8px] skake-animation__image--1">
                                      <div className="w-[100%] h-[100%] ">
                                        <img
                                          src={item.img}
                                          alt={`Image ${item.id}`}
                                        />
                                      </div>
                                    </div>
                                    <div className="text-left w-[319px]">
                                      <div>
                                        <h2 className="text-[28px] font-normal">
                                          Lorem ipsum
                                        </h2>
                                      </div>
                                      <div className="text-left">
                                        <p className="text-base font-normal ">
                                          Lorem ipsum dolor
                                          sit amet
                                          consectetur.
                                          Pharetra gravida
                                          in sit convallis
                                          neque tincidunt
                                          augue vitae vitae.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )
                      )}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* a */}
        <div className="mt-[96px] flex justify-center text-text-#0000">
          <div className="w-[1200px] h-[auto] pb-[78px] ">
            <div>
              <div className="flex">
                <div className="m-auto w-[100%]">
                  <div className="mb-[67px]">
                    <h1 className="text-4xl">
                      Hệ thống cửa hàng
                    </h1>
                  </div>
                  <div className="flex justify-end gap-[13px] mb-[20px]">
                    {APIFake.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          backgroundColor:
                            selectedItem === index
                              ? "#A82825"
                              : "#FFFFFF",
                          cursor: "pointer",
                          color:
                            selectedItem === index
                              ? "#FFFFFF"
                              : "#888888",
                          border:
                            selectedItem === index
                              ? "none"
                              : "1px solid #888888",
                        }}
                        className="px-[32px] py-[12px] rounded-full "
                        onClick={() =>
                          handleItemClick(index)
                        }
                      >
                        {item.btn}
                      </div>
                    ))}
                  </div>
                  <div>
                    {itembtn.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-[46px]  mb-[21px]"
                      >
                        <div className="w-[279px] h-[135px] bg-themtest"></div>
                        <div className="text-left w-[100%] pl-[46px] pt-[23px] bg-themtest">
                          <div>{item.title}</div>
                          <div className="w-[422px]">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="mt-[96px] flex justify-center bg-footer h-[309px] text-text-#0000">
          <div className="w-[1200px] h-[auto] pb-[78px]">
            <div>
              <div className="flex mt-[72px]">
                <div className="flex flex-wrap gap-[40px] justify-between m-auto w-[100%] text-color ">
                  <div className="">
                    <div className="w-[158px] h-[145px] bg-footer-them "></div>
                  </div>
                  <div className="text-left w-[352px]">
                    Địa Chỉ
                  </div>
                  <div className="text-left ">
                    Thời gian mở cửa
                  </div>
                  <div className="text-left">Liên hệ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
