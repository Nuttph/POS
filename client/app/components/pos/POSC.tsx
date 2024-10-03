import React, { useEffect, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { data, Propdata, Product } from "@/app/store/product";
const POSC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [sn, setSn] = useState<string>("");
  const [sendSn, setSendSn] = useState<string>();
  const [getData, setGetData] = useState<Product>();
  useEffect(() => {
    setGetData(data[0].result);
  }, []);
  const sendAPI = () => {
    const checkSn = getData?.filter((e) => e.creditCard.number == sn);
    setSendSn(checkSn[0]);
    console.log(checkSn[0]);
    // console.log(getData);
  };
  return (
    <>
      <div className="w-full pt-[25px] pl-[80px] bg-[#112776] h-[100vh] relative">
        <div
          className={`absolute duration-[0.3s] ${
            openMenu ? "w-[500px]" : "w-[70px]"
          } h-full bg-[#73adff] left-0 top-0 flex items-start justify-start pl-[10px] shadow-2xl border-r-[2px] border-[#000000]`}
        >
          <Hamburger
            size={30}
            duration={0.3}
            onToggle={(toggled) => {
              if (toggled) {
                setOpenMenu(true);
              } else {
                setOpenMenu(false);
              }
            }}
          />
        </div>
        <div className="h-full bg-[#ffffff] rounded-md p-[35px]">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  // console.log(getData);
                  sendAPI();
                }}
              >
                <label>
                  S/N:{" "}
                  <input
                    value={sn}
                    onChange={(e) => {
                      setSn(e.target.value);
                    }}
                    type="text"
                    className="border-2 outline-none px-[10px] py-[5px] rounded-md"
                  />
                </label>
                <button className="bg-green-600 hover:bg-green-700 duration-300 px-2 rounded-md">
                  Check
                </button>
              </form>
            </div>
            <div>
              {sendSn && (
                <>
                  <div className="flex flex-row justify-between bg-blue-100">
                    <div>
                      Product Name : <span>{sendSn.productName}</span>
                    </div>
                    <div>
                      Product Name : <span>{sendSn.price} Bath</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default POSC;
