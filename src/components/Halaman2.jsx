import check_icon from "../assets/Icont/check_icon.svg";
import icon_lightning from "../assets/Halaman2/icon_lightning.svg";
import icon_claen from "../assets/Halaman2/Icon_clean.svg";
import icon_cart from "../assets/Halaman2/Icon_cart.svg";
import icon_Credit from "../assets/Halaman2/Icon_credit.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Halaman2 = ({ paddingX, tinggi }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: false,
    });
  });

  const datas = [
    {
      id: 1,
      gambar: icon_lightning,
      judul: "Cepat Tepat",
      ket: "Layanan express 4 jam selesai. efisien tanpa kompromi kualitas",
    },
    {
      id: 2,
      gambar: icon_claen,
      judul: "Cuci Bersi Wangi",
      ket: "Gunakan deterjen premium & pewangi anti bau apek. cuci bersih, harum tahan lama",
    },
    {
      id: 3,
      gambar: icon_cart,
      judul: "Gratis Antar Jemput",
      ket: "Pesan online, kami jemput ke rumah lo. Bebas ribet, tanpa minimum order",
    },
    {
      id: 4,
      gambar: icon_Credit,
      judul: "Harga Sahabat",
      ket: "Mulai dari 5k per kilo. baju bersih gak harus mahal",
    },
  ];
  return (
    <div
      id="layanan"
      className={`container flex items-center ${paddingX}  mx-auto  flex flex-col pb-35 min-h-screen`}
    >
      <div
        data-aos="fade-down"
        className="flex flex-col items-center font-Roboto gap-3"
      >
        <div className="flex gap-2 shadow items-center py-2 px-3 bg-[#3c3636] hover:bg-[#585353] text-white rounded-sm">
          <img src={check_icon} alt="" />
          <h1 className="">Berdiri sejak 2020</h1>
        </div>
        <h1 className="font-black text-3xl text-center">
          kenapa Pilih Laundry Kilat?
        </h1>
        <p className="text-center text-sm">
          Bukan cuman soal cuci-mencuci. ini soal kenyamanan, dan kepercayaan
          yang ngak <br className=""></br> perlu lo pikirkan
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <div className="grid  lg:grid-cols-4 md:grid-cols-2  gap-8 font-Roboto ">
          {datas.map((data, key) => (
            <div
              data-aos="zoom-in"
              className="flex hover:scale-105 transition-all duration-100 flex-col gap-3 shadow  shadow-[#939191] rounded-sm w-[100%] h-50  justify-center items-center"
            >
              <div className="border w-11 h-11 rounded-full bg-black items-center flex justify-center">
                <img src={data.gambar} alt="" />
              </div>
              <h1 className="text-md font-black">{data.judul}</h1>
              <p className="text-[13px] w-[70%] text-[#aeaaaa] text-center">
                {data.ket}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Halaman2;
