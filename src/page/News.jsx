const items = [
  {
    img: "http://auntieannes.co.kr/wp-content/uploads/2023/08/%EB%8C%80%EC%A7%80-341-705x453.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Platea cras turpis libero turpis.",
    des: "Description 1",
  },
  {
    img: "http://auntieannes.co.kr/wp-content/uploads/2023/08/%EB%8C%80%EC%A7%80-341-705x453.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Platea cras turpis libero turpis. 2",
    des: "Description 2",
  },
  {
    img: "http://auntieannes.co.kr/wp-content/uploads/2023/08/%EB%8C%80%EC%A7%80-341-705x453.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Platea cras turpis libero turpis. 3",
    des: "Description 3",
  },
  {
    img: "http://auntieannes.co.kr/wp-content/uploads/2023/08/%EB%8C%80%EC%A7%80-341-705x453.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Platea cras turpis libero turpis. 4",
    des: "Description 4",
  },
  {
    img: "http://auntieannes.co.kr/wp-content/uploads/2023/08/%EB%8C%80%EC%A7%80-341-705x453.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Platea cras turpis libero turpis. 5",
    des: "Description 5",
  },
  {
    img: "http://auntieannes.co.kr/wp-content/uploads/2023/08/%EB%8C%80%EC%A7%80-341-705x453.png",
    title:
      "Lorem ipsum dolor sit amet consectetur. Platea cras turpis libero turpis. 6",
    des: "Description 6",
  },
];

const News = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px]  mt-[64px]  ">
        <div className="mb-[86px]">
          <div>
            <h1 className="text-[64px] mb-[26px]">
              Tuyển dụng
            </h1>
          </div>
          <div className="text-[20p]">
            <p>
              Lorem ipsum dolor sit amet consectetur. Platea
              cras turpis libero turpis.
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage:
                "url(https://phela.vn/wp-content/uploads/2022/01/banner-1.jpg)",
            }}
            className="w-[100%] h-[486px] bg-[#EEE] relative mb-[157px] bg-cover bg-center"
          >
            <div className="w-[989px] h-[183px] bg-[#D9D9D9] flex justify-center items-center absolute bottom-[-92px] left-[10%] ">
              <h1 className="text-[32px] text-center ">
                Tuyển dụng có thể liên quan đến quá trình
                tìm kiếm và lựa chọn người để làm việc trong
                một tổ chức hoặc công ty.
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-x-[30px] gap-y-[26px] mb-[228px]">
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="h-[466px] w-[380px] bg-[#eee] "
                >
                  <div className="w-[100%] bg-[#eee] ">
                    <img
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="px-[20px]  h-[118px] w-[100%] bg-[#D9D9D9] ">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
