import { useEffect, useState } from "react";
import Halaman1 from "./Halaman1";
import Halaman2 from "./Halaman2";
import Navbar from "./Navbar";
import Halaman3 from "./Halaman3";
import Halaman4 from "./Halaman4";

const Utama = () => {
  const [isOpen, SetmenuOpen] = useState(false);
  const [Scroll, setScroll] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.onclick) {
        SetmenuOpen(false);
      }
      if (window.scrollY > 5) {
        setScroll(true); //trus jika mengubah
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = Scroll ? "bg-gray-50 " : "bg-white";
  return (
    <div className={`${scrollActive}`}>
      <Navbar menuOpen={isOpen} />
      <Halaman1 paddingX="px-16" tinggi="min-h-screen" />
      <Halaman2 paddingX="px-16" tinggi="min-h-screen" />
      <Halaman3 paddingX="px-16" tinggi="mt-30" />
      <Halaman4 paddingX="px-16" />
    </div>
  );
};
export default Utama;
