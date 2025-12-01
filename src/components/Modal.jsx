import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ isOpen, isClose, children }) => {
  if (!isOpen) return null;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: false,
    });
  });
  return (
    <div className="fixed flex items-center inset-0 justify-center z-50 opacity-95 bg-[#cdcdcd] transition-all duration-150 ">
      <div
        data-aos="fade-down"
        className="text-center bg-white   gap-3 py-7 px-2 rounded-lg shadow-2xl max-w-sm w-full flex flex-col justify-center items-center"
      >
        {children}
        <div className="flex justify-center gap-2">
          <button className="rounded py-1 px-2 cursor-pointer bg-[#3c3636] hover:bg-[#141313] text-white">
            Ya, Lanjutkan
          </button>
          <button
            onClick={isClose}
            className=" py-1 px-2 cursor-pointer rounded text-white bg-red-600 hover:bg-red-800"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
