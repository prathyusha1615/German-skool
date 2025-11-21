import React, { lazy, Suspense } from "react";
import SaleBanner from "./components/SaleBanner";
import Header from "./components/Header";
import German from "./components/german/German";

const LearnGerman = lazy(() => import("./components/learngerman/LearnGerman"));
const CourseLevel = lazy(() => import("./components/courselevel/CourseLevel"));
const CourseModules = lazy(() => import("./components/coursemodules/CourseModules"));
const LearnMode = lazy(() => import("./components/learnmode/LearnMode"));
const Segmentation = lazy(() => import("./components/segmentation/Segmentation"));
const Package = lazy(() => import("./components/package/Package"));
const Journey = lazy(() => import("./components/journey/Journey"));
const FreeClass = lazy(() => import("./components/freeclass/FreeClass"));
const FAQ = lazy(() => import("./components/faq/FAQ"));
const Footer = lazy(() => import("./components/Footer"));
const Home: React.FC = () => {
  return (
    <div>
      <SaleBanner deadline="2025-11-23T23:59:00+05:30" ctaHref="/contact_us" />
      <Header onCtaClick={() => window.location.assign("#book")} />
      <German/>
      <LearnGerman/>
      <CourseLevel />
      <CourseModules />
      <LearnMode />
      <Segmentation />
      <Package />
      <Journey />
      <FreeClass />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
