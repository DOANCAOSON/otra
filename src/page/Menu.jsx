import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const Menu = () => {
  const [white, setWither] = useState(0);
  const slder_wrapper = useRef(null);

  const moveSlider = (direction) => {
    const slider = slder_wrapper.current;
    if (slider) {
      const currentX = slider.scrollLeft;
      const cardWidth = slider.offsetWidth;
      const offset =
        direction === "left" ? -cardWidth : cardWidth;
      slider.scrollTo({
        left: currentX + offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setWither(
      slder_wrapper.current.scrollWidth -
        slder_wrapper.current.offsetWidth
    );
  });
  return (
    <div className="mb-[273px]">
      <div className="mt-[122px] mb-[61px] flex justify-center ">
        <div>
          <div className="flex items-center w-[363px]">
            <div className="mr-[6px] text-[16px] text-colorBlack">
              Lorem ipsum
            </div>
            <div className="h-[1px] w-[70%] bg-[#000]"></div>
          </div>
          <div className="text-[64px] text-colorBlack opacity-[1]">
            Menu Ô Trà
          </div>
        </div>
      </div>
      <div className="flex w-[1200px] gap-[16px] h-[375px] m-[auto] ">
        <div className="w-[308px] mt-[32px]">
          <div className="text-[36px] w-[308px] mb-[18px]">
            Sản phẩm <br />
            mới
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur. Platea
              cras turpis libero turpis.
            </span>
          </div>
        </div>
        <div className="container flex justify-center items-center w-[100%] flex-col relative ">
          <motion.div
            ref={slder_wrapper}
            whileTap={{ cursor: "grabbing" }}
            className="slider_wraper w-[100%] overflow-hidden flex "
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -white }}
              className="inner_crousel inline-flex gap-[14px]"
            >
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
              <div className="card  w-[282px]  h-[375px] bg-[#D9D9D9] "></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="mb-[53px] flex justify-center ">
        <div className="w-[1200px]">
          <div className="mb-[53px]">
            <div className="text-[36px] mb-[26px]">
              Toàn bộ sản phẩm
            </div>
            <div className="text-[24px] mb-[26px]">
              CÀ PHÊ
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
            </div>
          </div>
          <div className="mb-[53px]">
            <div className="text-[24px] mb-[26px] ">
              Ô long Matcha
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
            </div>
          </div>
          <div className="mb-[53px]">
            <div className="text-[24px] mb-[26px] ">
              Syphon
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
            </div>
          </div>
          <div className="mb-[53px]">
            <div className="text-[24px] mb-[26px] ">
              French Press
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
            </div>
          </div>
          <div className="mb-[53px]">
            <div className="text-[24px] mb-[26px] ">
              Moka Pot
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
            </div>
          </div>
          <div className="mb-[53px]">
            <div className="text-[24px] mb-[26px] ">
              Nitro Cold Brew
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
              <div className="bg-[#D9D9D9] h-[380px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
