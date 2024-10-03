"use client";
import React, { useEffect, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { data, Product } from "@/app/store/product";

const POSC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [sn, setSn] = useState<string>("");
  // const [sendSn, setSendSn] = useState<string>();
  const [getData, setGetData] = useState<Product>();
  const [listProduct, setListProduct] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setGetData(data[0].result);
  }, []);
  // var productlist = [];
  const sendAPI = () => {
    const checkSn = getData?.filter((e: any) => e.productID == sn);
    // productlist.push(checkSn[0]);
    setListProduct((prev) => [...prev, checkSn[0]]);
    console.log(listProduct);
    setTotal(total + Number(checkSn[0].price));
  };
  return (
    <>
      <div>978-0-357-08733-6</div>
      <div>978-0-480-63838-2</div>
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
                  ADD
                </button>
              </form>
            </div>
            <div className="w-full flex flex-col">
              {listProduct && (
                <>
                  {listProduct.map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        index % 2 == 0 ? "bg-blue-200" : "bg-pink-200"
                      } flex flex-row justify-between w-full`}
                    >
                      <div key={index}>{item.productName}</div>
                      <div key={index}>{item.price}</div>
                    </div>
                  ))}
                </>
              )}
              <div className="flex flex-row justify-end">
                {total == 0 ? <></> : <>total : {total.toFixed(2)}</>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default POSC;
