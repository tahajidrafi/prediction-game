import Image from "next/image";
import React from "react";
import sneak from "../../../public/assets/sneaking-eye.gif";

interface ErrorModalProps {
  predictionScore: any;
  predictionMessage: string;
  onClose: () => void;
}

const ResultModal: React.FC<ErrorModalProps> = ({
  predictionScore,
  predictionMessage,
  onClose,
}) => {
  return (
    <div className="w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg text-center">
      <Image src={sneak} alt="Gyan Baba" />
      <h2 className="text-2xl font-bold mb-4 playwrite leading-[45px]">
        Chances of Marriage : {predictionScore}%
      </h2>
      <p className="text-lg playwrite">{predictionMessage}</p>
      <button
        onClick={onClose}
        className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold py-2 px-4 rounded mt-5 playrite"
      >
        Firse Karo
      </button>
    </div>
  );
};

export default ResultModal;
