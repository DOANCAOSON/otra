// import { motion } from "framer-motion";
// import sliders1 from "../images/sldiers1.png";
// import sliders4 from "../images/sliders4.png";
// import sliders3 from "../images/sliders3.jpg";
// import Slidertexxt from "./Slidertexxt";
// import { useEffect, useState } from "react";

// const images = [
//   {
//     id: "1",
//     img: sliders1,
//     title: "Auntie Anne's Season Menu 1",
//     name: "리치 티에이",
//     description:
//       "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱 1",
//   },
//   {
//     id: "2",
//     img: sliders4,
//     title: "Auntie Anne's Season Menu 2",
//     name: "리치 티에드",
//     description:
//       "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱2",
//   },

//   {
//     id: "3",
//     img: sliders3,
//     title: "Auntie Anne's Season Menu 3",
//     name: "리치 티에이드",
//     description:
//       "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱3",
//   },
// ];

// const BannerSlider = ({
//   currentIndex,
//   refSliderBanner,
//   setCurrentIndex,
// }) => {
//   const [isButtonDisabled, setButtonDisabled] =
//     useState(false);

//   const handleSlide = (status) => {
//     if (!isButtonDisabled) {
//       refSliderBanner.current = status;
//       if (status === "next") {
//         setCurrentIndex(
//           (prevIndex) => (prevIndex + 1) % images.length
//         );
//       }
//       if (status === "prev") {
//         setCurrentIndex(
//           (prevIndex) =>
//             (prevIndex - 1 + images.length) % images.length
//         );
//       }
//       setButtonDisabled(true);

//       setTimeout(() => {
//         setButtonDisabled(false);
//         return () => {
//           setButtonDisabled(false);
//         };
//       }, 1001);
//     }
//   };

//   const src = () => {
//     if (refSliderBanner.current === "next") {
//       const nextIndex =
//         (currentIndex - 1 + images.length) % images.length;
//       return images[nextIndex].img;
//     }
//     if (refSliderBanner.current === "prev") {
//       const prevIndex = (currentIndex + 1) % images.length;
//       return images[prevIndex].img;
//     }
//     return images[images.length - 1].img;
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleSlide("next");
//     }, 5001);
//     return () => {
//       clearInterval(interval);
//     };
//   });

//   return (
//     <div className="flex w-[100%]  h-[100vh] relative">
//       {/* <button
//         className="text-boder mr-4 absolute bottom-10 left-[45%] z-10 "
//         onClick={() => handleSlide("next")}
//       >
//         Next Slide
//       </button>
//       <button
//         className="text-boder absolute bottom-10 left-[52%] z-10"
//         onClick={() => handleSlide("prev")}
//       >
//         Prev Slide
//       </button> */}
//       <div className="w-[50%] relative">
//         <motion.div className="slide" style={{ zIndex: 1 }}>
//           <img src={src()} alt={`Slide ${currentIndex}`} />
//         </motion.div>
//         <div
//           style={{
//             zIndex: 2,
//             backgroundImage: `url(${sliders4})`,
//             backgroundSize: "cover",
//           }}
//           className="slide"
//         >
//           <motion.img
//             key={currentIndex}
//             initial={{
//               y:
//                 refSliderBanner.current === "prev"
//                   ? -1000
//                   : 1000,
//             }} // Di chuyển ảnh ra khỏi màn hình
//             animate={{ y: 0 }}
//             transition={{
//               duration: 1,
//             }}
//             src={images[currentIndex].img}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-[100%] h-[100%]"
//           />
//         </div>
//       </div>
//       {/* <div className="w-[50%] h-[100%] relative bg-[#005ad5] ">
//         <Slidertexxt
//           images={images}
//           currentIndex={currentIndex}
//           ref1={refSliderBanner}
//         />
//       </div> */}
//     </div>
//   );
// };

// export default BannerSlider;
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import sliders1 from "../images/sldiers1.png";
import sliders4 from "../images/sliders4.png";
import sliders3 from "../images/sliders3.jpg";
import Slidertexxt from "./Slidertexxt";

const BannerSlider = () =>
  // {
  // currentIndex,
  // refSliderBanner,
  // setCurrentIndex,
  // }
  {
    const ref = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [current, setCurrent] = useState(0);
    const [isButtonDisabled, setButtonDisabled] =
      useState(false);
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
        img: sliders4,
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

    const handleSlide = (status) => {
      if (!isButtonDisabled) {
        if (status === "next") {
          setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % images.length
          );
          setCurrent(
            (prevIndex) =>
              (prevIndex - 1 + images.length) %
              images.length
          );
          ref.current = "next";
        }
        if (status === "prev") {
          setCurrentIndex(
            (prevIndex) =>
              (prevIndex - 1 + images.length) %
              images.length
          );
          setCurrent(
            (prevIndex) => (prevIndex + 1) % images.length
          );

          ref.current = "prev";
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

    const src = () => {
      if (ref.current === "next") {
        const nextIndex =
          (currentIndex - 1 + images.length) %
          images.length;
        return images[nextIndex].img;
      }
      if (ref.current === "prev") {
        const prevIndex =
          (currentIndex + 1) % images.length;
        return images[prevIndex].img;
      }
      return images[images.length - 1].img;
    };

    useEffect(() => {
      const interval = setInterval(() => {
        handleSlide("next");
      }, 7000);

      return () => {
        clearInterval(interval);
      };
    });

    return (
      <div className="flex w-[100%]  h-[100vh] relative">
        <button
          className="text-[#000] bg-slate-400 rounded-full px-[20px] py-[10px] absolute bottom-5 left-[40%]  z-20"
          onClick={() => handleSlide("next")}
        >
          Next Slide
        </button>
        <button
          className="text-[#000]  bg-slate-400 rounded-full px-[20px] py-[10px] absolute  bottom-5 left-[53%]  z-20"
          onClick={() => handleSlide("prev")}
        >
          Prev Slide
        </button>
        <div className="app w-[50%] h-[100%]">
          <div className="slide" style={{ zIndex: 1 }}>
            <img
              src={src()}
              alt={`Slide ${currentIndex}`}
            />
          </div>
          <div className="slide" style={{ zIndex: 2 }}>
            <motion.img
              key={currentIndex}
              initial={{
                y: ref.current === "prev" ? -1000 : 1000,
              }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              src={images[currentIndex].img}
              alt={`Slide ${currentIndex + 1}`}
            />
          </div>
        </div>
        <div className="w-[50%] h-[100%] relative bg-[#005ad5] ">
          <Slidertexxt
            images={images}
            currentIndex={currentIndex}
            ref1={ref}
          />
        </div>
      </div>
    );
  };

export default BannerSlider;
