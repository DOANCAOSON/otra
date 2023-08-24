import { motion } from "framer-motion";
import sliders1 from "../images/sldiers1.png";
import sliders2 from "../images/sliders2.jpg";
import sliders3 from "../images/sliders3.jpg";
import Slidertexxt from "./Slidertexxt";
import { useState } from "react";

const images = [
    {
      id: "1",
      img: sliders1,
      title: "Auntie Anne's Season Menu 1",
      name: "리치 티에이",
      description:
        "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱 1",
    },
    {
      id: "2",
      img: sliders2,
      title: "Auntie Anne's Season Menu 2",
      name: "리치 티에드",
      description:
        "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱2",
    },

    {
      id: "3",
      img: sliders3,
      title: "Auntie Anne's Season Menu 3",
      name: "리치 티에이드",
      description:
        "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱3",
    },
  ];


const BannerSlider = ({currentIndex , refSliderBanner ,setCurrentIndex} ) => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleSlide = (status) => {
    if (!isButtonDisabled) {
        refSliderBanner.current = status;
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
      }, 1001);
    }
  };
  return (
    <div className="flex w-[100%] h-[100vh] relative ">
         <button
          className="text-boder mr-4 absolute bottom-10 left-[45%] z-10 "
          onClick={() => handleSlide("next")}
        >
          Next Slide
        </button>
        <button
          className="text-boder absolute bottom-10 left-[52%] z-10"
          onClick={() => handleSlide("prev")}
        >
          Prev Slide
        </button>
          <div className="w-[50%] h-[100%]">
            <div
              style={{ zIndex: 2 ,   backgroundImage: `url(http://localhost:5173/src/images/sldiers1.png)`, backgroundSize: "cover", }}
              className="w-[100%] h-[100%]"
            >
              <motion.img
                key={currentIndex}
                initial={{
                  y: refSliderBanner.current === "prev" ? -1000 : 1000,
                }} // Di chuyển ảnh ra khỏi màn hình
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                }}
                src={images[currentIndex].img}
                alt={`Slide ${currentIndex + 1}`}
              />
            </div>
          </div>
          <div className="w-[50%] h-[100%] relative bg-[#005ad5] ">
            <Slidertexxt
              images={images}
              currentIndex={currentIndex}
              ref1={refSliderBanner}
            />
          </div>
        </div>
  )
}

export default BannerSlider