import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopUp: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Show on first render (page load / refresh)
  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-4">
      {/* Click outside to close */}
      <div
        className="absolute inset-0"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div className="relative z-[1001] flex max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* LEFT IMAGE */}
        <div className="hidden md:block ">
          <img
            src="https://media.onlinegermanskool.com/popupimage.svg" /* change to your asset */
            alt="Learning"
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-8 md:p-10 relative ">
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            aria-label="Close popup"
          >
            ✕
          </button>

          {/* Small logo */}
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="40" viewBox="0 0 34 40" fill="none">
              <path d="M9.0916 7.30338H32.0674C32.858 7.30338 33.4993 6.64921 33.4993 5.8427V1.46068C33.4993 0.654168 32.8587 0 32.0674 0H1.93193C1.14129 0 0.5 0.654168 0.5 1.46068V32.201C0.5 33.0082 1.14129 33.6617 1.93193 33.6617H22.8136C23.123 33.6617 23.4238 33.7637 23.6711 33.9526L31.2099 39.7064C32.1539 40.4267 33.5 39.7395 33.5 38.5366V14.6364C33.5 13.8299 32.8587 13.1757 32.0681 13.1757H15.4789C14.6882 13.1757 14.0469 13.8299 14.0469 14.6364V19.0184C14.0469 19.8249 14.6882 20.4791 15.4789 20.4791H24.9084C25.699 20.4791 26.3403 21.1333 26.3403 21.9398V24.8977C26.3403 25.7042 25.699 26.3583 24.9084 26.3583H9.0916C8.30096 26.3583 7.65966 25.7042 7.65966 24.8977V8.76405C7.65966 7.95755 8.30096 7.30338 9.0916 7.30338Z" fill="#6346FA"/>
            </svg>
          </div>

          <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-snug">
            Wait! Don’t Leave Without <br /> Trying a Free German Class
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Experience our teaching style with a free trial before you decide.
          </p>

          <button
            onClick={() => {
              setOpen(false);
              navigate("/contact_us");
            }}
            className="mt-6 inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition"
            style={{ background: "#A190FC" }}
          >
            Book My Free Trial
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
