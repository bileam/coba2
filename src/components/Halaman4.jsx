import icon_check from "../assets/Halaman3/icon_check.svg";
import icon_kilo from "../assets/Halaman3/icon_kilo.svg";
import icon_express from "../assets/Halaman3/icon_express.svg";
import icon_sepatu from "../assets/Halaman3/icon_sepatu.svg";
import icon_premium from "../assets/Halaman3/icon_premium.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Halaman4 = ({ paddingX, tinggi }) => {
  const DummyData = [
    {
      id: 0,
      gambar: icon_kilo,
      title: "harian",
    },

    {
      id: 1,
      gambar: icon_express,
      title: "Express",
    },
    {
      id: 2,
      gambar: icon_sepatu,
      title: "Bulanan",
    },
    {
      id: 3,
      gambar: icon_premium,
      title: "Bisnis",
    },
  ];

  console.log(DummyData);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: false,
    });
  });
  return (
    <div
      id="Halaman4"
      className={`${paddingX} container mx-auto pb-30  min-h-screen flex flex-col gap-6 `}
    >
      <div
        data-aos="fade-up" 
        className="flex flex-col item items-center relative"
      >
        <div className="flex gap-2 shadow items-center py-2 px-3 bg-[#3c3636] hover:bg-[#585353] text-white  rounded-sm">
          <img src="" alt="" />
          <h1 className="font-Roboto">Harga Terjangkau & Fleksibel</h1>
        </div>
        <h1 className="font-black text-3xl text-center">
          Paket Harga Loundri Kilat
        </h1>
        <p className="text-center text-[13px] w-[70%] font-sans">
          Dari yang simple sampai premium, semua kebutuhan loundry lo kami
          layani dengan sepenuh hati
        </p>
        {/* <div className="text-white absolute bg-red-600 text-sm rounded-full px-2 top-8 flex items-center justify-center">
          Harga diskon
        </div> */}
      </div>
      <div className="flex-1 justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 gap-6  md:gap-6 lg:gap-6">
          {DummyData.map((data, index) => (
            <div
              data-aos="zoom-in-up"
              className={` relative shadow py-4 flex flex-col items-center rounded gap-2 ${
                index === 1 ? "border-2 border-black scole-105 " : "shadow"
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-3  text-white bg-red-600 px-5  shadow text-sm rounded-full">
                  Paling laris 50%
                </div>
              )}
              <img
                src={data.gambar}
                alt=""
                className="shadow rounded-full px-4 py-4 bg-black"
              />
              <h1 className="font-bold text-black">{data.title}</h1>
              <h1 className="text-sm px-3 rounded-full bg-black  text-white text-center items-center">
                Praktis & Ekonomi
              </h1>
              <h1 className="text-black text-xl font-bold">Rp. 5.000 / Kg</h1>
              <p className="max-w-[80%] text-[13px] text-[#878585] text-center font-Roboto">
                paket hemat untuk kebutuhan harian. pas buat mahasiswa pekerja,
                atau siapa saja yang butuh loundry cepat & bersih
              </p>
              <ul className="flex flex-col text-sm text-[#878585]">
                <li className="flex gap-2">
                  <img src={icon_check} alt={data.nama} />
                  <p>Deterjen premium</p>
                </li>
                <li className="flex gap-2">
                  <img src={icon_check} alt={data.nama} />
                  <p>pewangi alami</p>
                </li>
                <li className="flex gap-2">
                  <img src={icon_check} alt={data.nama} />
                  <p>gratis antar jemput</p>
                </li>
                <li className="flex gap-2">
                  <img src={icon_check} alt={data.nama} />
                  <p>Estimasi 1-2 hari selesai</p>
                </li>
              </ul>
              <button
                className={`text-sm border px-10 py-1 rounded-md flex cursor-pointer  ${
                  index === 1
                    ? "text-white bg-[#3c3636] hover:bg-[#585353] scale-100 shadow-2xl"
                    : "border hover:bg-[#3c3636] hover:text-white"
                }`}
              >
                Order Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Halaman4;
