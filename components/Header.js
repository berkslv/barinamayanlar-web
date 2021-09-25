import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({content}) {
  return (
    <header className="h-screen w-full flex p-6">
      <div className="relative base:w-5/12 base:block hidden w-full h-full border-8 border-white">
        <Image
          src={content?.header?.img}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="base:w-7/12 w-full flex flex-wrap content-between">
        <div className="w-full">
          <h1
            dangerouslySetInnerHTML={{ __html: content?.header?.title }}
            className="text-white font-bebas sm:text-7xl xs:text-6xl xxxs:text-5xl text-4xl text-right"
          ></h1>
        </div>
        <div className="w-full flex xxs:flex-row flex-col justify-end items-end md:space-x-8 space-x-4 xxs:space-y-0 space-y-4">
          <h2
            dangerouslySetInnerHTML={{ __html: content?.header?.subtitle }}
            className="text-white md:text-3xl sm:text-2xl text-lg whitespace-nowrap text-right"
          ></h2>
          <Link href={content?.header?.link}>
            <a className="text-white md:text-2xl sm:text-xl text-base md:w-44 w-36 md:h-16 h-12 flex justify-center items-center md:border-8 border-6 text-center border-white uppercase font-semibold hover:bg-white hover:text-prime active:bg-white active:text-prime transition-colors">
              {content?.header?.button}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
