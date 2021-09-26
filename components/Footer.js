import React from "react";


export default function Footer() {
  return (
    <footer className="w-full h-20 bg-gray-700 flex flex-col justify-center items-center text-gray-50">
      <h5>
        Made by{" "}
        <a href="https://berkselvi.dev/index.html" className="font-semibold border-b" >
          Berk Selvi
        </a> 
        {" "} © 2021
      </h5>
      <h6>
        Bu proje açık kaynaklıdır.{" "}
        <a href="https://github.com/berkslv/barinamayanlar-web" className="font-semibold border-b">
          Ziyaret et.
        </a>
      </h6>
    </footer>
  );
}
