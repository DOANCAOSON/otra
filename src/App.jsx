import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import img1 from "./images/slider1.png";
import img2 from "./images/slider2.png";
import img3 from "./images/slider3.png";
import Header from "./component/Header";
import Slider1 from "./component/Slider";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import StoreChain from "./component/StoreChain";
import BannerSlider from "./component/BannerSlider";
function App() {
  const [selectedItem, setSelectedItem] = useState(0);
  const handleItemClick = (index) => {
    setSelectedItem(index);
    setCurrentIndex(index);
  };
  const ref = useRef("");

  const [currentIndex, setCurrentIndex] = useState(0);

  // const images = [
  //   {
  //     id: "1",
  //     img: "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  //     title: "Auntie Anne's Season Menu 1",
  //     name: "리치 티에이드",
  //     description:
  //       "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱 1",
  //   },
  //   {
  //     id: "2",
  //     img: "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  //     title: "Auntie Anne's Season Menu 2",
  //     name: "리치 티에이드",
  //     description:
  //       "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱2",
  //   },

  //   {
  //     id: "3",
  //     img: "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  //     title: "Auntie Anne's Season Menu 3",
  //     name: "리치 티에이드",
  //     description:
  //       "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱3",
  //   },
  // ];

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
    autoplaySpeed: 5000,
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
        <Header />

        {/* slider */}
        <BannerSlider
          currentIndex={currentIndex}
          refSliderBanner={ref}
          setCurrentIndex={setCurrentIndex}
        />

        {/* slider-item */}
        <Slider1 />
        {/* bannner */}
        <Banner />
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
                                    className={`flex w-[500px] items-center justify-between`}
                                  >
                                    <div className="mr-[8px]  skake-animation__image--1">
                                      <div className=" h-[278px] ">
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
        <StoreChain
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
        />
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
