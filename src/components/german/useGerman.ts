import { useCallback, useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
/** ---- Brand Colors (synced with header + salebanner) ---- */
export const COLORS = {
  primary: "#826BFB",     // banner bg / brand
  ctaBg: "#A894FF",       // header button bg
  ctaText: "#E4F1FE",     // header button text
  body: "#6B6A70",        // nav/body text
  bannerText: "#FFFFFF",  // banner text
};

// Dropdown Options
export const tefGoalOptions = ["Germany PR", "Job Seeker Visa", "Study in Germany", "Work Abroad / Career Growth"];
export const germanLevelOptions = ["Beginner (A1)", "Beginner (A2)", "Intermediate (B1)", "Upper Intermediate (B2)", "Advanced (C1/C2)", "Not Sure"];

/** ---- Static content (copy lives with the hook for easy edits) ---- */
export const content = {
  badge: "A1 Beginner Course Starts Soon",
  title: "German Language Courses",
  subtitle: "From Beginner to Advanced(A1–C2)",
  description:
    "Live online classes with certified German tutors. Flexible schedules, personalized learning, and a free trial class to help you start with confidence.",
  ctas: {
   
    book: "Book Free Trial Class",
     explore: "Explore Courses",
    submit: "Get Started for Free →",
  },
  bulletsLeft: [
    "Super Intensive Fast Track Course",
    "Easy Payment Method",
    "100% LIVE + Recorded Sessions",
  ],
  bulletsRight: [
    "Regular Batches Available",
    "24x7 Support",
  ],
  socialProof: "Trusted by over 1000+ learners worldwide.",
  formTitle: "Get Personalized Guidance",
  formConsent: "I agree to be contacted regarding courses and offers.",
};


/** ---- Lead form state & validation ---- */
export type LeadForm = {
  fullName: string;
  countryCode: string;
  phone: string; 
  email: string;
  goal: string; 
  germanLevel: string; 
  startDate: string; 
  learningNeeds: string; 
  consent: boolean; 
  expertGuidance: boolean; 
};

const initial: LeadForm = {
  fullName: "",
  countryCode: "India (+91)",
  phone: "",
  email: "",
  goal: "",
  germanLevel: "",
  startDate: "",
  learningNeeds: "",
  consent: false,
  expertGuidance: false,
};


export function useGerman() {
  const [form, setForm] = useState<LeadForm>(initial);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const countryCodeOptions = useMemo(() => {
    return getCountries().map(countryCode => {
      const callingCode = getCountryCallingCode(countryCode);
      const countryName = en[countryCode]; // Get the country name from the locale
      return `${countryName} (+${callingCode})`;
    }).sort(); // Sorting alphabetically
  }, []);
  const setField = useCallback(
    // Added 'string | boolean' to support checkbox and select
    (k: keyof LeadForm, v: string | boolean) => {
      setForm((prev) => ({ ...prev, [k]: v }));
    },
    []
  );


const errors = useMemo(() => {
  const e: Partial<Record<keyof LeadForm, string>> = {};
  if (!form.fullName) e.fullName = "Required";
  if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
  if (!form.countryCode) e.countryCode = "Select your country code";
  if (!/^\+?[0-9]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone";
  if (!form.goal) e.goal = "Select your goal";
  if (!form.germanLevel) e.germanLevel = "Select your level";
  if (!form.startDate) e.startDate = "Select a date";
    if (!form.learningNeeds || form.learningNeeds.trim().length < 30) {
    e.learningNeeds = "Please enter at least 30 characters";
  }
  
  // Ensure both consent checkboxes are selected
  if (!form.consent) e.consent = "You must agree to be contacted regarding courses and offers";
  if (!form.expertGuidance) e.expertGuidance = "You must agree to expert guidance for the German exam";

  return e;
}, [form]);


  const hasError = useMemo(() => Object.keys(errors).length > 0, [errors]);
const handleSubmit = useCallback(async () => {
  setTouched({
    fullName: true,
    countryCode: true,
    phone: true,
    email: true,
    goal: true,
    germanLevel: true,
    startDate: true,
    learningNeeds: true,
    consent: true,
    expertGuidance: true,
  });

  if (hasError) return;

  try {
    setLoading(true);

    const payload = {
      fullName: form.fullName,
      countryCode: form.countryCode,
      phone: form.phone,
      email: form.email,
      goal: form.goal,
      germanLevel: form.germanLevel,
      startDate: form.startDate,
      learningNeeds: form.learningNeeds,
      consent: form.consent ? "true" : "false",
      expertGuidance: form.expertGuidance ? "true" : "false",
    };

    // 👇 Decide base URL depending on where the app runs
    const isLocal = window.location.hostname === "localhost";
    const apiUrl = isLocal
      ? "http://localhost:5000/api/submit"
      : "/api/submit"; // this becomes https://onlinegermanskool.com/api/submit in prod

    const emailResponse = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const emailJson = await emailResponse.json();

    if (emailJson?.message === "Emails sent and data stored successfully") {
      setTouched({});
      navigate("/thank_you", { replace: true });
    } else {
      alert(emailJson?.error || "Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
}, [form, hasError, navigate]);


  return {
    COLORS,
    content,
    form,
    setField,
    errors,
    touched,
    setTouched,
    handleSubmit,
    loading,
    // Exporting the options
    tefGoalOptions, 
    germanLevelOptions,
  };
}

export default useGerman;