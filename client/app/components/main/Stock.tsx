"use client";
import React, { useEffect, useState } from "react";
import { data } from "../../store/product";
const Stock = () => {
  const [product, setProduct] = useState();
  const fetchData = async () => {
    setProduct(data[0].result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center font-bold text-[30px]">
        Strock of Store
      </div>
      <div className="mx-[25px] rounded-[5px] py-[25px] bg-sky-400"></div>
      <div className="mx-[25px]">
        {product && (
          <div>
            {product.map((item, index) => (
              <div
                className={`${
                  index % 2 == 0 ? "bg-red-100" : "bg-blue-100"
                } py-[5px] flex items-center gap-[5px] justify-between flex-row px-[10px]`}
                key={index}
              >
                <div className="flex flex-row gap-2 items-center">
                  <div className="text-[15px] font-bold">{index + 1}</div>
                  <div className="flex gap-5">
                    <div>{item.productID}</div>
                    <div>{item.productName}</div>
                  </div>
                </div>
                <div>{item.password}</div>
                <div>฿{item.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => {
          console.log(product);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Stock;
