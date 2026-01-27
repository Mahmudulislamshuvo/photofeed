import Image from "next/image";
import React from "react";
import DetailsCard from "./DetailsCard";
import { getPhotoById } from "@/lib/image-data";

const PhotoDetails = ({ id, lang }) => {
  const photo = getPhotoById(id);
  return (
    <>
      <div className="container my-4 lg:my-8">
        {/* <!--  --> */}
        <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
          {/* <!-- main photo --> */}
          <div className="col-span-12 lg:col-span-8 border rounded-xl">
            <Image
              className="max-w-full h-full max-h-[70vh] mx-auto"
              src={photo.url}
              alt={photo.title}
              width={800}
              height={600}
            />
          </div>
          {/* <!-- main photo ends --> */}

          {/* <!-- details card -->/ */}
          <DetailsCard details={photo} lang={lang} />
          {/* <!-- details card ends --> */}
        </div>
        {/* <!--  --> */}
      </div>
    </>
  );
};

export default PhotoDetails;
