import Image from "next/image";
import React from "react";

const LangSection = () => {
  return (
    <>
      <button className="flex items-center gap-2">
        <Image
          className="max-w-8"
          src="/usa.png"
          alt="bangla"
          height={32}
          width={32}
        />
        English
      </button>
    </>
  );
};

export default LangSection;
