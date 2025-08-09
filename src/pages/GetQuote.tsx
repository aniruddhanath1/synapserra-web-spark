import React from "react";

const GetQuote = () => (
  <div className="w-full min-h-screen flex flex-col items-center justify-center py-12 bg-white">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-center">Get a Quote</h1>
    <form className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6 flex flex-col items-center">
      <input type="text" placeholder="Name" className="w-full border p-3 rounded text-lg" required />
      <input type="email" placeholder="Email" className="w-full border p-3 rounded text-lg" required />
      <input type="text" placeholder="Service Interested In" className="w-full border p-3 rounded text-lg" required />
      <textarea placeholder="Project Details" className="w-full border p-3 rounded text-lg" rows={6} required />
      <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded text-lg font-semibold">Request Quote</button>
    </form>
  </div>
);

export default GetQuote;
