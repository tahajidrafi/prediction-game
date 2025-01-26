import Image from "next/image";
import React from "react";
import wow from "../../../public/assets/wow.gif";
interface ErrorModalProps {
  onClose: () => void;
}

const UsedNameModal: React.FC<ErrorModalProps> = ({ onClose }) => {
  return (
    <div className="w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg text-center">
      <Image src={wow} alt="Gyan Baba" />
      <p className="text-lg playwrite">
        Tumne Mera nam liya?? Pakke karde Shadi??🤭🤭
      </p>
      <button
        onClick={() => onClose()}
        className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold py-2 px-4 rounded mt-5 playrite"
      >
        Sharee
      </button>
    </div>
  );
};

export default UsedNameModal;
