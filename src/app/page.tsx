"use client";
import { useState } from "react";
import gyanBaba from "../../public/assets/gyan-baba.png";
import {
  BadPredictions,
  GoodPredictions,
  middlePredictions,
} from "./Data/predictions";
import Image from "next/image";
import ErrorModal from "./components/ErrorModal";
import ResultModal from "./components/resultModal";
import UsedNameModal from "./components/usedNameModal";
import axios from "axios";

export default function Home() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [predictionScore, setPredictionScore] = useState(0);
  const [predictionMessage, setPredictionMessage] = useState("");
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isCheating, setIsCheating] = useState(false);
  const [cheatingMessage, setCheatingMessage] = useState("");
  const [isUsedNameModalOpen, setIsUsedNameModalOpen] = useState(false);

  const handleGenerateResults = async () => {
    if (!name1 || !name2) {
      setIsErrorModalOpen(true);
      setIsCheating(true);
      setCheatingMessage("Nam nehi doge keya??");
      return;
    }
    if (name1 === name2) {
      setIsErrorModalOpen(true);
      setIsCheating(true);
      setCheatingMessage("Same nam kiw deteho??");
      return;
    }
    const airtableApiUrl =
      "https://api.airtable.com/v0/appBI858XGK6fCWwu/tbljoJitrICOf1BIW";
    const airtableApiKey =
      "patLb3YchIJGA7azo.90b24eba1d9799c3b622d961434d7ea682c22b7aba92fed25eddb605176c10b8";

    const data = {
      fields: {
        Your_Name: name1,
        Second_Name: name2,
      },
    };

    try {
      await axios.post(airtableApiUrl, data, {
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Data sent to Airtable successfully!");
    } catch (error) {
      console.error("Failed to send data to Airtable:", error);
    }

    setIsResultModalOpen(true);
    const score = Math.floor(Math.random() * 100);
    const message =
      score > 50
        ? GoodPredictions
        : score < 50
        ? BadPredictions
        : middlePredictions;
    setPredictionMessage(message[Math.floor(Math.random() * message.length)]);
    setPredictionScore(score);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 h-screen flex items-center justify-center">
      <div className="text-center p-8 max-w-lg w-full bg-white rounded-xl shadow-xl animate__animated animate__fadeIn animate__delay-1s mx-4">
        <Image src={gyanBaba} alt="Gyan Baba" />
        <h2 className="text-3xl font-bold mb-4 font-sans sacramento">
          Dekhle Apna Future
        </h2>
        <div className="mb-6">
          <label
            htmlFor="name1"
            className="block text-left text-lg font-semibold mb-2 playwrite"
          >
            Your Name
          </label>
          <input
            id="name1"
            type="text"
            placeholder="Enter Your Name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            className="p-4 w-full mb-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans"
          />
          <label
            htmlFor="name2"
            className="block text-left text-lg font-semibold mb-2 playwrite"
          >
            Your Crush&apos;s Name
          </label>
          <input
            id="name2"
            type="text"
            placeholder="Enter Your Crush's Name"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            className="p-4 w-full mb-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans"
          />
        </div>

        <button
          onClick={handleGenerateResults}
          className="w-full p-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg font-semibold hover:bg-pink-600 transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Predict Your Future
        </button>
      </div>

      {/* Error Modal */}
      {isErrorModalOpen && (
        <ErrorModal
          message={cheatingMessage}
          cheating={isCheating}
          onClose={() => setIsErrorModalOpen(false)} // Close modal when the button is clicked
        />
      )}

      {/* Result Modal */}
      {isResultModalOpen && (
        <ResultModal
          predictionScore={predictionScore}
          predictionMessage={predictionMessage}
          onClose={() => setIsResultModalOpen(false)}
        />
      )}

      {/* Used Name Modal */}
      {isUsedNameModalOpen && (
        <UsedNameModal onClose={() => setIsUsedNameModalOpen(false)} />
      )}
    </div>
  );
}
