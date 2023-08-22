import { useState } from "react";
import "./App.css";

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

    return (
        <>
            <div className="mb-[400px]">
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
                        <div className="w-[100%] h-[100%] bg-gray-300">
                            1
                        </div>
                        <div className="w-[100%] h-[100%] bg-gray-300">
                            2
                        </div>
                        <div className="w-[100%] h-[100%] bg-gray-300">
                            3
                        </div>
                    </div>
                    <div className="w-[50%] h-[100%] bg-orange-400">
                        1
                    </div>
                </div>
                {/* slider-item */}
                <div className="flex w-[100%] h-[110vh] relative">
                    <div className="w-[50%] h-[100%] bg-zinc-500">
                        <div className="mt-[153px] ml-[120px] text-text-#0000 text-left">
                            <div className="w-[226px] text-4xl">
                                Câu chuyện thương hiệu
                            </div>
                            <div className="w-[410px] text-lg">
                                Lorem ipsum dolor sit amet
                                consectetur. Lobortis
                                convallis volutpat proin
                                nunc nullam ac enim. Lorem
                                ipsum dolor sit amet
                                consectetur. Lobortis
                                convallis volutpat proin
                                nunc nullam ac enim.
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] h-[100%] bg-amber-200">
                        <div className="mt-[390px]  ml-[183px] text-text-#0000 text-left">
                            <div className="w-[226px] text-4xl">
                                Câu chuyện thương hiệu
                            </div>
                            <div className="w-[410px] text-lg">
                                Lorem ipsum dolor sit amet
                                consectetur. Lobortis
                                convallis volutpat proin
                                nunc nullam ac enim. Lorem
                                ipsum dolor sit amet
                                consectetur. Lobortis
                                convallis volutpat proin
                                nunc nullam ac enim.
                            </div>
                        </div>
                    </div>
                    <div className="w-[319px] h-[500px] bg-amber-400 absolute top-[90px] left-[50%] translate-x-[-50%] translate-Y-[-90px] z-10 rotate-3"></div>
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
                                            Các dòng sản
                                            phẩm nổi bật
                                        </h1>
                                    </div>
                                    <div className="flex justify-center flex-wrap gap-[31px] relative  ">
                                        <div className="absolute left-[0] top-[50%] translate-y-[-50%] h-[64px] w-[64px] rounded-full bg-black"></div>
                                        <div className="absolute right-[0] top-[50%] translate-y-[-50%] h-[64px] w-[64px] rounded-full bg-black"></div>
                                        <div className="w-[500px] h-[278px] flex">
                                            <div className="w-[173px] mr-[20px] h-[100%] rotate-r5 bg-slate-400"></div>
                                            <div className="w-[319px]">
                                                <div>
                                                    Lorem
                                                    ipsum
                                                </div>
                                                <div className="text-left">
                                                    Lorem
                                                    ipsum
                                                    dolor
                                                    sit amet
                                                    consectetur.
                                                    Pharetra
                                                    gravida
                                                    in sit
                                                    convallis
                                                    neque
                                                    tincidunt
                                                    augue
                                                    vitae
                                                    vitae.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[500px] h-[278px] flex ">
                                            <div className="w-[173px] mr-[20px] h-[100%]  rotate-3 bg-slate-400"></div>
                                            <div className="w-[319px]">
                                                <div>
                                                    Lorem
                                                    ipsum
                                                </div>
                                                <div className="text-left">
                                                    Lorem
                                                    ipsum
                                                    dolor
                                                    sit amet
                                                    consectetur.
                                                    Pharetra
                                                    gravida
                                                    in sit
                                                    convallis
                                                    neque
                                                    tincidunt
                                                    augue
                                                    vitae
                                                    vitae.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[500px] h-[278px] flex">
                                            <div className="w-[173px] mr-[20px] h-[100%] rotate-3  bg-slate-400"></div>
                                            <div className="w-[319px]">
                                                <div>
                                                    Lorem
                                                    ipsum
                                                </div>
                                                <div className="text-left">
                                                    Lorem
                                                    ipsum
                                                    dolor
                                                    sit amet
                                                    consectetur.
                                                    Pharetra
                                                    gravida
                                                    in sit
                                                    convallis
                                                    neque
                                                    tincidunt
                                                    augue
                                                    vitae
                                                    vitae.
                                                </div>
                                            </div>
                                        </div>
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
                                            Hệ thống cửa
                                            hàng
                                        </h1>
                                    </div>
                                    <div className="flex justify-end gap-[13px] mb-[20px]">
                                        {APIFake.map(
                                            (
                                                item,
                                                index
                                            ) => (
                                                <div
                                                    key={
                                                        index
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            selectedItem ===
                                                            index
                                                                ? "#A82825"
                                                                : "#FFFFFF",
                                                        cursor: "pointer",
                                                        color:
                                                            selectedItem ===
                                                            index
                                                                ? "#FFFFFF"
                                                                : "#888888",
                                                        border:
                                                            selectedItem ===
                                                            index
                                                                ? "none"
                                                                : "1px solid #888888",
                                                    }}
                                                    className="px-[32px] py-[12px] rounded-full "
                                                    onClick={() =>
                                                        handleItemClick(
                                                            index
                                                        )
                                                    }
                                                >
                                                    {
                                                        item.btn
                                                    }
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div>
                                        {itembtn.map(
                                            (
                                                item,
                                                index
                                            ) => (
                                                <div className="flex gap-[46px]  mb-[21px]">
                                                    <div className="w-[279px] h-[135px] bg-themtest"></div>
                                                    <div className="text-left w-[100%] pl-[46px] pt-[23px] bg-themtest">
                                                        <div>
                                                            {
                                                                item.title
                                                            }
                                                        </div>
                                                        <div className="w-[422px]">
                                                            {
                                                                item.description
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
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
                                    <div className="text-left">
                                        Liên hệ
                                    </div>
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
