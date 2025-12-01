import React, { useState } from "react";
import Modal from "../components/Modal";

const HomePage = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <button
        onClick={() => setOpenModal(true)}
        className="bg-blue-700 p-2 rounded text-white"
      >
        enter me
      </button>
      {isOpenModal && (
        <div className="inset-0 fixed z-50 opacity-100 flex justify-center items-center ">
          <div className="bg-white text-black p-10 flex flex-col items-center gap-2">
            <h1>Modals</h1>
            <p>ini merupakan modals</p>
            <button
              onClick={() => setOpenModal(false)}
              className="bg-red-600 p-1 rounded text-white"
            >
              cancel
            </button>
          </div>
        </div>
      )}
      {/* <Modal isOpen={isOpenModal} isClose={() => setOpenModal(false)}>
        <div>
          <p>ini merupakan modal</p>
        </div>
      </Modal> */}
    </div>
  );
};

export default HomePage;
