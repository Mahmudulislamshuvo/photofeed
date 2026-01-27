import Image from "next/image";
import React from "react";

const LangSection = () => {
  return (
    <>
      <button className="flex items-center gap-2">
        <Image
          className="max-w-8"
          src="/bd.png"
          alt="bangla"
          height={32}
          width={32}
        />
        Bangla
      </button>
    </>
  );
};

export default LangSection;
