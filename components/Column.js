import React from "react";
import Image from "next/image";

export default function Column({ content, index }) {
  const layout = index % 2 === 0; // 0, true | 1, false

  return (
    <div className={`p-6 w-full flex flex-wrap ${layout ? 'md:flex-row':'md:flex-row-reverse'}  flex-col-reverse justify-between items-center`}>
      <div className="md:w-1/2 w-full h-screen-2">
        <div className="relative w-full h-full md:border-8 border-6 border-white">
          <Image
            src={content?.columns[index]?.img}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={`md:w-1/2 w-full h-screen-2 flex ${layout ? 'flex-row':'flex-row-reverse'} justify-end items-center`}>
        <h3
          dangerouslySetInnerHTML={{ __html: content?.columns[index]?.title }}
          className={`text-white font-semibold md:text-3xl text-2xl xs:w-8/12 w-full ${layout ? 'text-right pr-3':'text-left pl-3'}`}
        ></h3>
        <div className="bg-white w-2 h-1/2"></div>
      </div>
    </div>
  );
}
