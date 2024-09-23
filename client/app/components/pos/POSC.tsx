import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
const POSC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <div className="w-full pt-[25px] px-[50px] bg-[#dbdbdb] h-[100vh] relative">
        <div
          className={`absolute duration-[0.3s] ${
            openMenu ? "w-[500px]" : "w-[70px]"
          } h-full bg-[#ffe3a6] left-0 top-0 flex items-start justify-start pl-[10px] shadow-2xl border-r-[2px] border-[#ffb23d]`}
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
        <div className="h-full bg-[#ffffff] rounded-md"></div>
      </div>
    </>
  );
};

export default POSC;
