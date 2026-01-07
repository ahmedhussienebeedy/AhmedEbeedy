import React, { useState, useEffect, useRef } from "react";
import cvImage from "../../assets/images/cvimage.JPG";

export default function Home() {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [recording, setRecording] = useState(false);

  const recognitionRef = useRef(null);
  const isStoppedRef = useRef(true);

  // ---------- Check voice support ----------
  const isVoiceSupported =
    typeof window !== "undefined" &&
    (window.SpeechRecognition || window.webkitSpeechRecognition);

  // ---------- Text To Speech ----------
  const speak = (text) => {
    return new Promise((resolve) => {
      if (!window.speechSynthesis || !text) return resolve();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ar-EG";
      utterance.rate = 1.8;
      utterance.onend = resolve;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    });
  };

  // ---------- Send message ----------
  const sendMessage = async (msg) => {
    if (!msg.trim()) return;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });

      const data = await res.json();
      setAnswer(data.reply);
      await speak(data.reply);

      if (!isStoppedRef.current) recognitionRef.current?.start();
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setAnswer("Server failed");
      await speak("Server failed");
      if (!isStoppedRef.current) recognitionRef.current?.start();
    }
  };

  // ---------- Initialize Speech Recognition ----------
  useEffect(() => {
    if (!isVoiceSupported) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "ar-EG";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript.trim();
      if (transcript) {
        recognition.stop();
        sendMessage(transcript);
      }
    };

    recognition.onerror = () => {
      setRecording(false);
      isStoppedRef.current = true;
    };

    recognitionRef.current = recognition;

    return () => recognition.stop();
  }, [isVoiceSupported]);

  // ---------- Voice toggle ----------
  const toggleRecording = () => {
    if (!isVoiceSupported) return;

    if (recording) {
      recognitionRef.current?.stop();
      setRecording(false);
      isStoppedRef.current = true;
    } else {
      isStoppedRef.current = false;
      recognitionRef.current?.start();
      setRecording(true);
    }
  };

  // ---------- Send text ----------
  const handleSendText = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-6 p-4">

      {/* Image */}
      <div className="w-72 rounded-2xl bg-gray-900 p-2 shadow-xl">
        <img
          src={cvImage}
          alt="CV"
          className="rounded-xl"
          loading="lazy"
        />
      </div>

      {/* Chat box */}
      <div className="w-full max-w-md bg-gray-900 rounded-xl p-4">
        <h2 className="text-indigo-400 font-bold mb-2">
          Ahmed Ebeedy Chatbot
        </h2>

        <div className="bg-gray-800 p-3 rounded-lg min-h-[70px] text-gray-300 mb-3">
          {answer || "👋 اسألني عن Ahmed Ebeedy أو شغله"}
        </div>

        {/* Text input */}
        <div className="flex gap-2 mb-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 px-3 py-2 rounded-lg bg-gray-700 outline-none"
          />
          <button
            onClick={handleSendText}
            className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Send
          </button>
        </div>
      </div>

      {/* Voice control */}
      <button
        onClick={toggleRecording}
        disabled={!isVoiceSupported}
        className={`px-5 py-2 rounded-lg transition
          ${recording ? "bg-red-500" : "bg-green-500"}
          ${!isVoiceSupported && "opacity-50 cursor-not-allowed"}
        `}
      >
        {recording ? "Stop Voice" : "Start Voice"}
      </button>

      {!isVoiceSupported && (
        <p className="text-sm text-gray-400">
          Voice recognition is not supported in this browser
        </p>
      )}
    </div>
  );
}
