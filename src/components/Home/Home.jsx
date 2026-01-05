import React, { useState, useEffect, useRef } from "react";
import cvImage from "../../assets/images/cvimage.JPG";

export default function Home() {
  const [answer, setAnswer] = useState("");
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef(null);

  const whatsappNumber = "201040550125";
  const message = "Hello! I found your website and would like to chat.";

  // -------------------- TTS --------------------
  const speak = (text) => {
    if (!window.speechSynthesis || !text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-EG";
    utterance.rate = 1.3;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // -------------------- Live Speech Recognition --------------------
  const startLiveChat = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("متصفحك مش بيدعم الكلام");

    const recognition = new SpeechRecognition();
    recognition.lang = "ar-EG";
    recognition.interimResults = false;
    recognition.continuous = true; // ده المهم عشان يفضل live
    recognition.maxAlternatives = 1;

    recognition.onresult = async (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      console.log("User said:", transcript);

      try {
        const res = await fetch(import.meta.env.VITE_API_URL + "/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: transcript }),
        });
        const data = await res.json();
        setAnswer(data.reply);
        speak(data.reply);
      } catch (err) {
        console.error(err);
        setAnswer("حصلت مشكلة في السيرفر");
      }
    };

    recognition.onerror = (e) => {
      console.error("Speech recognition error", e);
      setRecording(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setRecording(true);
  };

  const stopLiveChat = () => {
    recognitionRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6 p-4">
      <div className="w-72 rounded-2xl bg-gray-900 p-2 shadow-xl">
        <img src={cvImage} alt="CV" className="rounded-xl object-cover" />
      </div>

     

      <div className="w-full max-w-md bg-gray-900 rounded-xl p-4">
        <h2 className="text-indigo-400 font-bold mb-2">Chatbot Answer:</h2>
        <div className="text-gray-300 p-2 rounded-lg bg-gray-800 min-h-[60px]">{answer}</div>
      </div>
        <div className="flex gap-2 ">
                <button
                  onClick={recording ? stopLiveChat : startLiveChat}
                  className={`px-4 py-2 rounded-lg ${recording ? "bg-red-500" : "bg-green-500"} hover:opacity-90 transition`}
                >
                  {recording ? "  End" : "Start"}
                </button>
              </div>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-7 h-7">
          <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.07 1.52 5.78L0 24l6.35-1.67A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52z" />
        </svg>
      </a>
    </div>
  );
}
