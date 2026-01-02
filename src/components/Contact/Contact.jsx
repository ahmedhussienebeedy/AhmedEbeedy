import React from 'react'

export default function Contact() {
  return (
<>
<div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="w-full max-w-lg rounded-2xl bg-gray-900 p-8 shadow-xl">
        
        <h1 className="text-4xl font-extrabold text-center text-indigo-500">
          Contact Us
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Have a question or want to work together?  
          Send me a message 👇
        </p>

        <form className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Ahmed Hussein"
              className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-sm outline-none resize-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold transition hover:bg-indigo-500 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
</>

)
}
