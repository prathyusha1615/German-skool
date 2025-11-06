import React from "react";
import { Link } from "react-router-dom";
import Header from "../src/components/Header";  // Assuming Header component is in the same directory
import Footer from "../src/components/Footer";  // Assuming Footer component is in the same directory

const ThankYouPage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center p-20 my-28">
        <h1 className="text-6xl font-semibold text-center">Thank You for Submitting!</h1>
        <p className="mt-4 text-center text-2xl">We will contact you shortly regarding your request.</p>
        <Link to="/" className="mt-6 text-blue-500">Back to Home</Link>
      </main>
    </div>
  );
};

export default ThankYouPage;
