import { useCallback, useMemo, useState } from "react";

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
  title: "We are always happy to help",
  // subtitle: "From Beginner to Advanced(A1–C2)",
  // description:
  //   "Whether you're a prospective student, parent, alumni, or community member, we value your feedback and are eager to assist you.",
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
    "24x7 Support",
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

export function useContactHero() {
  const [form, setForm] = useState<LeadForm>(initial);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

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

  const handleSubmit = useCallback(async () => {
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
    if (hasError) return;

    try {
      setLoading(true);
      // TODO: replace with your API call
      await new Promise((r) => setTimeout(r, 700));
      alert("Thanks! We’ll contact you shortly.");
      setForm(initial);
      setTouched({});
    } finally {
      setLoading(false);
    }
  }, [hasError]);

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

export default useContactHero;
