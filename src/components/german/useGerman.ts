import { useCallback, useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom';
/** ---- Brand Colors (synced with header + salebanner) ---- */
export const COLORS = {
  primary: "#826BFB",     // banner bg / brand
  ctaBg: "#A894FF",       // header button bg
  ctaText: "#E4F1FE",     // header button text
  body: "#6B6A70",        // nav/body text
  bannerText: "#FFFFFF",  // banner text
};

/** ---- Static content (copy lives with the hook for easy edits) ---- */
export const content = {
  badge: "A1 Beginner Course Starts Soon",
  title: "German Language Courses",
  subtitle: "From Beginner to Advanced(A1–C2)",
  description:
    "Live online classes with certified German tutors. Flexible schedules, personalized learning, and a free trial class to help you start with confidence.",
  ctas: {
    explore: "Explore Courses",
    book: "Book Free Trial Class",
    submit: "Get Started for Free →",
  },
  bulletsLeft: [
    "Super Intensive Fast Track Course",
    "Easy Payment Method",
    "100% LIVE + Recorded Sessions",
  ],
  bulletsRight: [
    "Regular Batches Available",
    "24x7 LMS Support",
  ],
  socialProof: "Trusted by over 1000+ learners worldwide.",
  formTitle: "Get Personalized Guidance",
  formConsent: "I agree to be contacted regarding courses and offers.",
};

/** ---- Lead form state & validation ---- */
export type LeadForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  startDate: string;
  city: string;
  goals: string;
  consent: boolean;
};

const initial: LeadForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  startDate: "",
  city: "",
  goals: "",
  consent: false,
};



export function useGerman() {
  const [form, setForm] = useState<LeadForm>(initial);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
const navigate = useNavigate();
  const setField = useCallback(
    (k: keyof LeadForm, v: string | boolean) => {
      setForm((prev) => ({ ...prev, [k]: v }));
    },
    []
  );


  const errors = useMemo(() => {
    const e: Partial<Record<keyof LeadForm, string>> = {};
    if (!form.firstName) e.firstName = "Required";
    if (!form.lastName) e.lastName = "Required";
    if (!/^\+?[0-9]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.startDate) e.startDate = "Select a date";
    if (!form.city) e.city = "Enter your city";
    if (!form.consent) e.consent = "Please accept the consent";
    return e;
  }, [form]);

  const hasError = useMemo(() => Object.keys(errors).length > 0, [errors]);

 // ---- single handleSubmit (posts to /api/submit) ----
  const handleSubmit = useCallback(async () => {
    // mark all as touched
    setTouched({
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
      startDate: true,
      city: true,
      goals: true,
      consent: true,
    });
      if (!form.consent) {
        alert("Please agree to be contacted regarding courses and offers.");
        return;
      }

    if (hasError) return;

    try {
      setLoading(true);

      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        email: form.email,
        startDate: form.startDate,
        city: form.city,
        goals: form.goals,
        consent: form.consent ? "true" : "false",
        website: "", // honeypot - keep empty
      };

      const r = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await r.json();
      if (json?.ok) {
        navigate("/thank_you", { replace: true });
        setForm(initial);
        setTouched({});
      } else {
        alert(json?.error || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [form, hasError]);

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
  };
}

export default useGerman;
