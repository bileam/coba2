import B_Loundri from "../assets/Gambar/B_loundri.png";
import car_icon from "../assets/Icont/car_icon.svg";
import time_icon from "../assets/Icont/time_icon.svg";
import location_icon from "../assets/Icont/location_icon.svg";
import message_icon from "../assets/Icont/message_icon.svg";
import order2_icon from "../assets/Icont/order2_icon.svg";
import track_icon from "../assets/Icont/track_icon.svg";
import person1 from "../assets/Person/person1.jpeg";
import person2 from "../assets/Person/person2.jpg";
import person3 from "../assets/Person/person3.jpeg";
import person4 from "../assets/Person/person4.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

const Halaman1 = ({ paddingX, tinggi }) => {
  console.log(paddingX);
  const avatars = [person1, person2, person3, person4];
  useState(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: false,
    });
  });
  return (
    <div
      className={`container mx-auto lg:gap-40 ${paddingX} py-15 lg:flex font-normal min-h-screen`}
    >
      <div
        id="beranda"
        data-aos="fade-left"
        className="flex items-center justify-center lg:order-2 order-1 "
      >
        <img src={B_Loundri} alt="" className="w-100" />
      </div>
      <div
        data-aos="fade-right"
        className="flex flex-col justify-center lg:w-[40%] lg:order-1 order-2  mx-auto"
      >
        <div className="font-bold outline bg-black text-white px-2 rounded">
          <h1 className="text-center">#1 Loundry Terpercaya di kotamu</h1>
        </div>
        <h1 className="text-[35px] font-extrabold">
          Loundry Kilat, Bersih dan Cepat
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="text-[18px] font-medium mb-4 mt-4">
              <p>
                Cucian Menumpuk? tenang, kami antar jemput bersih dalam hitungan
                Jam
              </p>
            </div>
            <ul className="flex flex-col gap-2 text-[15px]">
              <li className="flex gap-1">
                <img src={car_icon} alt="" className="shadow-2xl" />
                <h2>Gratis antar jemput tanpa minimun order</h2>
              </li>
              <li className="flex gap-1">
                <img src={time_icon} alt="" className="shadow-2xl" />
                <h2>Layanan express selesai dalam 4 jam</h2>
              </li>
              <li className="flex gap-1">
                <img src={location_icon} alt="" className="shadow-2xl" />
                <h2>Tracking cucian langsung dari website</h2>
              </li>
              <li className="flex gap-1">
                <img src={message_icon} alt="" className="shadow-2xl" />
                <h2 className="font-Bitcount text-[15px]">
                  Nonifikasi status via Whatshapp
                </h2>
              </li>
            </ul>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-2">
              <button className="flex  gap-1 py-2 text-center font-medium px-4  rounded-xl bg-[#3c3636] hover:bg-[#585353] text-white shadow-2xl cursor-pointer">
                <img src={order2_icon} alt="" />
                Order sekarang
              </button>
            </div>
            <div className="">
              <button className="flex  gap-1 py-2 text-center font-medium px-4  rounded-xl bg-[#3c3636] hover:bg-[#585353] text-white shadow-2xl cursor-pointer">
                <img src={track_icon} alt="" /> Lacak Cucian
              </button>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="flex -space-x-3 item-center ">
              {avatars.map((item, index) => (
                <img
                  key={index}
                  className="w-8 h-8 rounded-full border"
                  src={item}
                  alt=""
                />
              ))}

              {/* <img className="w-8 h-8 rounded-full border-2" src="" alt="" />
              <img className="w-8 h-8 rounded-full border-2" src="" alt="" /> */}
            </div>
            <p className="font-Roboto text-[#343232] text-sm">
              Dipercaya oleh 200+ Pelanggan puas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Halaman1;
