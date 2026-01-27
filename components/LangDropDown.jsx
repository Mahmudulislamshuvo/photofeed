import Image from "next/image";
import React from "react";

const LangDropDown = () => {
  return (
    <>
      <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
        <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
          <Image
            className="max-w-8"
            src="/bd.png"
            alt="bangla"
            height={32}
            width={32}
          />
          Bangla
        </li>
        <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
          <Image
            className="max-w-8"
            src="/usa.png"
            alt="bangla"
            height={32}
            width={32}
          />
          English
        </li>
      </div>
    </>
  );
};

export default LangDropDown;
