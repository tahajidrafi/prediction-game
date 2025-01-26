import Image from "next/image";
import React, { use } from "react";
import smirk from "../../../public/assets/smirk.gif";
import wow from "../../../public/assets/wow.gif";
interface ErrorModalProps {
  message: string;
  cheating: boolean;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  message,
  cheating,
  onClose,
}) => {
  return (
    <div className="w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg text-center">
      {cheating && (
        <h2 className="text-2xl font-bold mb-4 playwrite">Cheating Haa??</h2>
      )}
      <Image src={smirk} alt="Gyan Baba" />
      <p className="text-lg playwrite">{message}</p>
      <button
        onClick={onClose}
        className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold py-2 px-4 rounded mt-5 playrite"
      >
        Firse Karo
      </button>
    </div>
  );
};

export default ErrorModal;
