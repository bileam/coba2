import React, { useEffect, useState } from "react";
import icon_setting from "../assets/Icont/icon_setting.svg";
import icon_check from "../assets/Halaman3/icon_check.svg";
import icon_cek from "../assets/Halaman3/icon_cek.svg";
import icon_kilo from "../assets/Halaman3/icon_kilo.svg";
import icon_setrika from "../assets/Halaman3/icon_setrika.svg";
import icon_express from "../assets/Halaman3/icon_express.svg";
import icon_car from "../assets/Halaman3/icon_car.svg";
import icon_sepatu from "../assets/Halaman3/icon_sepatu.svg";
import icon_premium from "../assets/Halaman3/icon_premium.svg";
import icon_tanya from "../assets/Halaman3/icon_tanya.svg";
import cart from "../assets/Halaman3/cart.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";

const Halaman3 = ({ paddingX, tinggi }) => {
  const [isModalOpen, SetModalOpen] = useState(false);
  const [SelectName, SetSelectNime] = useState("");
  const [selectHarga, SetSelectHarga] = useState("");

  const datas = [
    {
      id: 1,
      gambar: icon_kilo,
      nama: "Loundri kiloan",
      durasi: "1-2 Hari",
      ket: "Cuci + setrika. solusi hemat buat baju harian lo.",
      ket1: "Deterjen premium",
      ket2: "Pewangi alami",
      ket3: "Pengeringan Optimal",
      harga: "Rp. " + 5000 + " / kg",
    },
    {
      id: 2,
      gambar: icon_setrika,
      nama: "Setrika Saja",
      durasi: "1 Hari",
      ket: "Baju sudah cuci tapi kusut? kami setrika sampai rapi.",
      ket1: "Setrika uap modern",
      ket2: "Bebas kusut",
      ket3: "Packing rapi",
      harga: "Rp. 3.000 / kg",
    },
    {
      id: 3,
      gambar: icon_express,
      nama: "Express 1 Jam",
      durasi: "1 Jam",
      ket: "Buru-buru? Cuci express kilat dalam 1 jam beres.",
      ket1: "Prioritas antrian",
      ket2: "Deterjen & pewangi premium",
      ket3: "Selesai dalam 1 jam",
      harga: "Rp. 10.000 / kg",
    },
    {
      id: 4,
      gambar: icon_car,
      nama: "Antar Jemput",
      durasi: "Jadwal Flexsibel",
      ket: "Kami jemput dan antar cucian lo. Gak perlu keluar rumah.",
      ket1: "Kurir ramah & tepat waktu",
      ket2: "Tanpa Minimum order",
      ket3: "Tracking status real-time",
      harga: "gratis/sesuai jarak",
    },
    {
      id: 5,
      gambar: icon_sepatu,
      nama: "Loundry sepatu & Helm",
      durasi: "2-3 Hari",
      ket: "Bersihin sepatu, helm, tas dll. Biar kinclong kayak baru.",
      ket1: "cuci tangan kusus",
      ket2: "Anti bau & jemur",
      ket3: "Kering total tanpa rusak",
      harga: "Rp. 15.000 / item",
    },
    {
      id: 6,
      gambar: icon_premium,
      nama: "Loundry Premium",
      durasi: "2 Hari",
      ket: "Perawatan khusus buat pakaian berbahan halus dan branded.",
      ket1: "Dry clean khusus",
      ket2: "Pewangi mewah",
      ket3: "Anti kusut & anti luntur",
      harga: "Rp. 20.000 / kg",
    },
  ];
  const handleButton = (nama, harga) => {
    SetSelectNime(nama);
    SetSelectHarga(harga);
    SetModalOpen(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: false,
    });
  });
  console.log(datas);
  return (
    <div
      id="harga"
      className={`container  pb-30 flex flex-col ${paddingX}  mx-auto justify-center gap-5 min-h-screen`}
    >
      <div
        data-aos="fade-down-right"
        className="flex flex-col items-center gap-2"
      >
        <div className="flex gap-2 shadow items-center py-2 px-3 bg-[#3c3636] hover:bg-[#585353] text-white rounded-sm">
          <img src={icon_setting} alt="" />
          <h1 className="font-Roboto">Layanan Unggulan Kami</h1>
        </div>
        <h1 className="font-black text-3xl">Layanan Loundry Kilat</h1>
        <p className="text-center text-[13px] w-[70%] font-sans">
          Semua Kebutuhan loundry lo, kami siapin, dari yang santai sampai yang
          kilat, semua ada di sini
        </p>
      </div>
      {/* grid 3 */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">
        {datas.map((data, key) => (
          <div
            data-aos="flip-left"
            className="flex flex-col shadow-[#939191] hover:scale-105 transition-all duration-100 shadow-sm rounded gap-2 w-[100%] h-[100%] p-6 "
          >
            <div className="flex gap-4">
              <img
                src={data.gambar}
                alt={data.nama}
                className="border rounded-full px-4 py-4 bg-black"
              />
              <div className="flex flex-col items-start">
                <h1 className="font-Roboto font-black text-md">{data.nama}</h1>
                <h1 className="text-white text-sm font-normal text-center my-auto px-2 rounded-2xl border bg-black">
                  {data.durasi}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-[15px] text-[#747272]">
              <p className="">{data.ket}</p>
              <ul className="flex flex-col text-sm">
                <li className="flex gap-2">
                  <img src={icon_check} alt={data.nama} />
                  <p>{data.ket1}</p>
                </li>
                <li className="flex gap-2">
                  <img src={icon_check} alt={data.nama} />
                  <p>{data.ket2}</p>
                </li>
                <li className="flex gap-2">
                  <img src={icon_check} alt={data.nama} />
                  <p>{data.ket3}</p>
                </li>
              </ul>
            </div>
            <div className=" flex justify-between ">
              <h1 className="font-black">{data.harga} </h1>
              <button
                onClick={() => handleButton(data.nama, data.harga)}
                className="group flex items-center  bg-[#3c3636] hover:bg-[#585353] hover:font-sans cursor-pointer text-white gap-1 px-2 py-1 rounded-md shadow-2xl border border-[#666262] font-medium"
              >
                <img src={cart} alt="" className="" />
                <p className="md:hidden hidden lg:block">order sekarang</p>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} isClose={() => SetModalOpen(false)}>
        <img src={icon_tanya} alt="" />
        <h1 className="font-medium text-black text-xl ">
          Lanjut ke Halaman Pemesanan?
        </h1>
        <div className="flex gap-2">
          <h1 className="font-Roboto text-black font-bold">{SelectName}</h1>
          <h1 className="font-Roboto text-black text-sm">{selectHarga}</h1>
        </div>
        <p className="text-[#6b6868] font-Roboto text-sm">
          Kami akan mengarahkan anda ke halaman order untuk melakukan pemesanan
          loundry
        </p>
      </Modal>
    </div>
  );
};

export default Halaman3;
