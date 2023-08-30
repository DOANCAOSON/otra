import { useRef } from "react";
import { useInView } from "framer-motion";
import ContactBaner from "../component/ContactBaner";
import Banner from "../component/contact/Banner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-[100%]">
      <Banner />
      <div className="mt-[86px] mb-[59px] flex justify-center">
        <div className="w-[1200px]">
          <div className="flex w-[100%] justify-between">
            <div className="text-colorBlack">
              <div className="w-[483px] mb-[62px] ">
                <div className="w-[100%] h-[508px] mb-[45px] bg-[#D9D9D9]"></div>
                <div className="text-[36px] w-[100%] mb-[28px]">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div>
                  <span className="text-[18px] w-[100%]">
                    Lorem ipsum dolor sit amet consectetur.
                    Platea cras turpis libero turpis.
                  </span>
                </div>
              </div>
              <div
                ref={ref}
                style={{
                  transform: isInView
                    ? "none"
                    : "translateX(-500px)",
                  opacity: isInView ? 1 : 0,
                  transition:
                    "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="w-[585px] h-[413px] bg-[#D9D9D9]"
              ></div>
            </div>
            <div className="flex justify-between flex-col ">
              <div className="w-[585px] h-[824px]">
                <img
                  src="http://auntieannes.co.kr/wp-content/uploads/2019/11/story_img02-1.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  transform: isInView
                    ? "none"
                    : "translateY(500px)",
                  opacity: isInView ? 1 : 0,
                  transition:
                    "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <div className="text-[36px] mb-[28px] w-[405px] ">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-[18px] w-[405px] ">
                  Lorem ipsum dolor sit amet consectetur.
                  Platea cras turpis libero turpis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://phela.vn/wp-content/uploads/2022/01/banner-1.jpg)",
          backgroundAttachment: "fixed",
        }}
        className="w-[100%] h-[339px] flex justify-center item-center opacity-[0.9] bg-no-repeat bg-cover bg-center"
      ></div>
      <ContactBaner />
    </div>
  );
};

export default Contact;
