import { useEffect, useRef, useState } from "react";
import Ligthning_icon from "../assets/Icont/Ligthning_icon.svg";
import Home_icon from "../assets/Icont/icon_home.svg";
import Layanan_icon from "../assets/Icont/Layanan_icon.svg";
import Price_icon from "../assets/Icont/Price_icon.svg";
import Cart_icon from "../assets/Icont/Cart_icon.svg";
import Lacak_icon from "../assets/Icont/Lacak_icon.svg";
import Kontact_icon from "../assets/Icont/Contact_icon.svg";
import Burger from "../assets/Icont/Burger.svg";
import Halaman2 from "./Halaman2";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Tambahan refs untuk burger button dan menu
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        // setOpen(false);
      } else {
        setScroll(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  let scrollActive = scroll
    ? "py-3 lg:px-16 md:px-7  mx-2 bg-white/30 backdrop-blur-sm  transition duration-200  top-0"
    : "py-3 lg:px-16 md:px-7";

  return (
    <nav
      className={`container ${scrollActive} 
        flex mx-auto  px-5   z-10  
        fixed  top-0 right-0 left-0 justify-between`}
    >
      {/* logo */}
      <div className="flex gap-2">
        {/* <img
          src={Ligthning_icon}
          alt=""
          className="border-2 px-1 rounded-[100%]"
        /> */}
        <a href="" className="my-auto ">
          <h1 className="font-bold text-black text-[20px]">LoundryKilat</h1>
        </a>
      </div>

      {/* menu */}
      <div className="my-auto">
        <ul className="md:flex  lg:gap-6 hidden  font-normal items-center lg:static md:gap-3">
          <li className="">
            <Link
              to="beranda"
              smooth={true}
              offset={-80}
              duration={500}
              spy={true}
              className="cursor-pointer flex gap-1 items-center justify-center "
              activeClass="border-b-4 border-[#3c3636]  transition-all"
            >
              <img src={Home_icon} alt="" />
              Beranda
            </Link>
          </li>
          <li className="flex gap-1 cursor-pointer">
            <Link
              to="layanan"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className="cursor-pointer  flex gap-1  items-center justify-center transition-all"
              activeClass="border-b-4 border-[#3c3636]  transition-all"
            >
              <img src={Layanan_icon} alt="" />
              Layanan
            </Link>
          </li>
          <li className="flex gap-1">
            <Link
              to="harga"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className="cursor-pointer flex gap-1 items-center justify-center "
              activeClass="border-b-4 border-[#3c3636]  transition-all"
            >
              <img src={Price_icon} alt="" />
              Harga
            </Link>
          </li>
          <li className="flex gap-1">
            <Link
              to="Halaman4"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className="cursor-pointer flex gap-1 items-center justify-center "
              activeClass="border-b-4 border-[#3c3636]  transition-all"
            >
              <img src={Cart_icon} alt="" />
              Order
            </Link>
          </li>
          <li className="flex gap-1">
            <img src={Lacak_icon} alt="" />
            <a href="">Lacak</a>
          </li>
          <li className="">
            <a href="" className="  flex gap-1">
              <img src={Kontact_icon} alt="" />
              <h1 className="font-normal">Kontak</h1>
            </a>
          </li>
        </ul>
      </div>

      {/* burger button */}
      <div className="md:hidden lg:hidden my-auto" ref={burgerRef}>
        <button
          onClick={() => setOpen(!menuOpen)}
          className="shadow-md transition-all hover:shadow-sky-400 rounded-full px-[2px] py-[2px] cursor-pointer "
        >
          <img src={Burger} alt="" />
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <ul
          ref={menuRef}
          className="md:hidden flex flex-col gap-3 font-normal items-start absolute right-10 top-11 px-3 shadow-2xl py-4 transition-all bg-white"
        >
          <li className="flex gap-1">
            <img src={Home_icon} alt="" />
            <a href="" className="">
              Beranda
            </a>
          </li>
          <li className="flex gap-1">
            <img src={Layanan_icon} alt="" />
            <a href="" className="">
              Layanan
            </a>
          </li>
          <li className="flex gap-1">
            <img src={Price_icon} alt="" />
            <a href="">Harga</a>
          </li>
          <li className="flex gap-1">
            <img src={Cart_icon} alt="" />
            <a href="">Order</a>
          </li>
          <li className="flex gap-1">
            <img src={Lacak_icon} alt="" />
            <a href="">Lacak</a>
          </li>
          <li className="">
            <a href="" className="  flex gap-1">
              <img src={Kontact_icon} alt="" />
              <h1 className="font-normal">Kontak</h1>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
