"use client";

import React, { useState } from "react";

type FooterProps = {
  onSubscribe?: (email: string) => void;
  brand?: string;      
  brandSoft?: string; 
  neutralPrimary?: string;
  neutralSecondary?: string;
  divider?: string;
};

export default function Footer({
  onSubscribe,
  brand = "#984DDD",
  brandSoft = "#A996FF",
  neutralPrimary = "#242325",
  neutralSecondary = "#6B6A70",
  divider = "#E7E6EA",
}: FooterProps) {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe?.(email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-7 md:px-[120px] py-12 md:py-16">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <h2
            className="text-[28px] md:text-[40px] font-semibold md:leading-[50px] leading-[35px] md:text-left text-center"
            style={{ color: neutralPrimary, fontFamily: "Raveo Display, sans-serif" }}
          >
            Your Journey to German
            <br /> Fluency Starts Here
          </h2>
          <p className="text-[14px] md:w-[35%] md:text-left text-center text-[#022850] leading-[21px] font-normal ">Online German Skool is a part of TLS (The Language Skool) — a global platform helping students master international languages with live, interactive, and personalised online courses.</p>

          <a
            href="/contact_us"
            className="inline-flex md:w-fit w-full justify-center items-center gap-2 rounded-lg px-5 py-3 text-[#ffffff] text-[15px] font-semibold"
            style={{ backgroundColor: brandSoft, fontFamily: "Raveo Display, sans-serif" }}
          >
            Book Free Trial Class Today
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="my-8 h-px w-full" style={{ background: divider }} />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7 max-w-xl">
            <img src="https://media.onlinegermanskool.com/logo.svg" alt="Online French Skool Logo" />
            <p
              className="mt-6 text-[15px] leading-6"
              style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
            >
              Subscribe to stay up to date with the latest updates and feature releases.
            </p>

            <form onSubmit={submit} className="mt-4">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g., username@email.com"
                  className="w-full rounded-2xl border bg-white px-4 py-4 text-[15px] outline-none transition placeholder:opacity-50"
                  style={{
                    borderColor: divider,
                    fontFamily: "Raveo Display, sans-serif",
                    color: neutralPrimary,
                  }}
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 rounded-lg px-4 py-2 text-white font-semibold"
                  style={{
                    background: brandSoft,
                    fontFamily: "Raveo Display, sans-serif",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <nav>
              <div
                className="mb-4 text-[16px] font-semibold"
                style={{ color: neutralPrimary, fontFamily: "Raveo Display, sans-serif" }}
              >
                Courses
              </div>
              <ul className="space-y-4">
                {["Beginner (A1–A2)", "Intermediate (B1–B2)", "Advanced (C1–C2)"].map((t) => (
                  <li key={t}>
                    <a
                      href="/"
                      className="text-[15px] leading-6 hover:underline"
                      style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <div
                className="mb-4 text-[16px] font-semibold"
                style={{ color: neutralPrimary, fontFamily: "Raveo Display, sans-serif" }}
              >
                Legal
              </div>
              <ul className="space-y-4">
                  <li>
                    <a
                      href="/privacy_policy"
                      className="text-[15px] leading-6 hover:underline"
                      style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                                    <li>
                    <a
                      href="/terms_and_conditions"
                      className="text-[15px] leading-6 hover:underline"
                      style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
                    >
                      Terms of Use
                    </a>
                  </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 h-px w-full" style={{ background: divider }} />

        <div className="mt-6 flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
          <span
            className="text-[15px]"
            style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
          >
            ©Copyright 2025
          </span>
          <span
            className="text-[15px]"
            style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
          >
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
