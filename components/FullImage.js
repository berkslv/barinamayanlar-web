import React from "react";
import Image from "next/image";

export default function FullImage({ content }) {
  return (
    <div className="p-6 h-screen-2 w-full">
      <div className="relative w-full h-full md:border-8 border-6 border-white">
        <Image
          src={content?.fullImage?.img}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
