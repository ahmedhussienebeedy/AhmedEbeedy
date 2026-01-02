import React from 'react'
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4">
      
      <h1 className="text-9xl font-extrabold text-indigo-500">404</h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-400 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold transition hover:bg-indigo-500 active:scale-95"
      >
        Go Back Home
      </Link>

    </div>
    
    </>
  )
}
