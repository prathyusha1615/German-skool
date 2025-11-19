import { useMemo } from "react";

/** Brand colors reused from header/sale banner */
export const COLORS = {
  primary: "#826BFB",   // brand / banner bg
  ctaBg: "#A894FF",     // header button bg
  ctaText: "#E4F1FE",   // header button text
  body: "#6B6A70",      // neutral secondary
  bannerText: "#F0EFF1" // banner text
};

/** Copy + icons for the right cards.
 *  icon can be a path to /public/svg or an inline SVG string (below shows inline SVG example).
 */
export const FEATURES = [
  {
    title: "Certified Tutors",
    subtitle:
      "Trained experts who prepare you for Goethe, TELC, and ÖSD exams.",
    // Inline SVG sample (drop your file path in `iconSrc` instead if you prefer)
    iconInline: `
<svg xmlns="http://www.w3.org/2000/svg" class="feature-icon" viewBox="0 0 107 107" fill="none">
  <rect width="107" height="107" rx="28" fill="#E4F1FE"/>
  <path d="M26.0098 61.2284V46.4964M72.12 52.6741L60.2131 60.6402C58.2918 61.9257 56.0415 62.6109 53.7406 62.6109C51.4397 62.6109 49.1893 61.9257 47.2681 60.6402L35.3612 52.677V67.7912C35.3612 69.2692 35.7111 70.7382 36.6551 71.8639C38.8518 74.4825 44.048 79 53.7406 79C63.4331 79 68.6294 74.4825 70.8261 71.8639C71.7671 70.7382 72.12 69.2692 72.12 67.7912V52.677L79.4129 47.7982C79.9007 47.4719 80.301 47.0277 80.578 46.5055C80.855 45.9833 81 45.3995 81 44.8064C81 44.2133 80.855 43.6295 80.578 43.1073C80.301 42.5852 79.9007 42.141 79.4129 41.8146L60.2101 28.9697C58.2892 27.6848 56.0394 27 53.7391 27C51.4388 27 49.189 27.6848 47.2681 28.9697L27.3242 42.3133C26.9073 42.5886 26.5667 42.9678 26.335 43.4147C26.1034 43.8616 25.9884 44.3643 26.0009 44.8691M35.3612 52.6741L27.3242 47.3026C26.9241 47.0382 26.5941 46.678 26.3633 46.2536C26.1325 45.8293 26.0081 45.3538 26.0009 44.8691M26.0009 44.8691V46.4994" stroke="#984DDD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    title: "Flexible Timings",
    subtitle: "Morning, evening, and weekend classes available.",
    iconInline: `<svg xmlns="http://www.w3.org/2000/svg" class="feature-icon" viewBox="0 0 107 107" fill="none">
  <rect width="107" height="107" rx="28" fill="#E0DAFE"/>
  <path d="M52.9997 78.0001C65.4261 78.0001 75.4997 67.9265 75.4997 55.5001C75.4997 43.0737 65.4261 33.0001 52.9997 33.0001C40.5733 33.0001 30.4997 43.0737 30.4997 55.5001C30.4997 67.9265 40.5733 78.0001 52.9997 78.0001Z" stroke="#984DDD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M61.75 46.75L53 55.5M70.5 70.5L73 78M35.5 70.5L33 78M28 35.5L35.5 28M70.5 28L78 35.5M53 33V28" stroke="#984DDD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    title: "100% Online",
    subtitle: "Learn from anywhere, all you need is a laptop & internet.",
    iconInline: `<svg xmlns="http://www.w3.org/2000/svg" class="feature-icon" viewBox="0 0 107 107" fill="none">
  <rect width="107" height="107" rx="28" fill="#E4F1FE"/>
  <path d="M78 54C78 40.1925 66.8075 29 53 29C39.1925 29 28 40.1925 28 54C28 67.8075 39.1925 79 53 79" stroke="#984DDD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M55.5 29.1251C55.5 29.1251 63 39.0001 63 54.0001M50.5 78.8751C50.5 78.8751 43 69.0001 43 54.0001C43 39.0001 50.5 29.1251 50.5 29.1251M29.575 62.7501H53M29.575 45.2501H76.425" stroke="#984DDD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M77.6976 68.7926C78.9326 69.5526 78.8551 71.4001 77.5851 71.5451L71.1676 72.2726L68.2901 78.0526C67.7201 79.2001 65.9576 78.6376 65.6651 77.2176L62.5276 61.9276C62.2801 60.7276 63.3601 59.9726 64.4026 60.6151L77.6976 68.7926Z" stroke="#984DDD" stroke-width="4"/>
</svg>`
  },
  {
    title: "Proven Success",
    subtitle: "95% of our students cleared their desired level.",
    iconInline: `<svg xmlns="http://www.w3.org/2000/svg" class="feature-icon" viewBox="0 0 107 107" fill="none">
  <rect width="107" height="107" rx="28" fill="#E0DAFE"/>
  <path d="M62.3211 29.0063H45.6727C44.2727 28.9383 42.9023 29.4252 41.859 30.3612C40.8157 31.2973 40.1836 32.607 40.0999 34.0062V50.4302C40.1518 53.1318 40.9404 55.7679 42.3807 58.0541C43.821 60.3403 45.8583 62.1898 48.2727 63.403C50.0358 64.3382 52.0011 64.8271 53.9969 64.8271C55.9927 64.8271 57.958 64.3382 59.7211 63.403C62.1355 62.1898 64.1728 60.3403 65.6131 58.0541C67.0534 55.7679 67.842 53.1318 67.894 50.4302V34.0062C67.8102 32.607 67.1781 31.2973 66.1348 30.3612C65.0915 29.4252 63.7211 28.9383 62.3211 29.0063Z" stroke="#984DDD" stroke-width="4" stroke-linecap="round"/>
  <path d="M67.8939 34.0061H73.4452C74.8411 33.9447 76.2052 34.4346 77.2432 35.3699C78.2813 36.3053 78.91 37.6113 78.9937 39.006C78.9859 42.1406 78.1765 45.221 76.6424 47.9545C75.0369 50.7809 72.7947 53.1943 70.0939 55.0031L67.8939 56.503L65.7453 57.803M40.0998 34.0061H34.5486C33.1526 33.9447 31.7885 34.4346 30.7505 35.3699C29.7125 36.3053 29.0838 37.6113 29 39.006C29.0081 42.1411 29.8162 45.2221 31.3513 47.9545C32.9569 50.7809 35.199 53.1943 37.8998 55.0031L40.0998 56.503L42.2484 57.803M48.4483 71.5001V63.4759M59.5454 71.5001V63.4759M45.3754 71.5001H62.6183C63.3113 71.4994 63.9977 71.6353 64.6381 71.9002C65.2784 72.1651 65.8603 72.5536 66.3503 73.0437C66.8404 73.5337 67.2289 74.1155 67.4938 74.7559C67.7587 75.3963 67.8946 76.0827 67.8939 76.7757V77.6756C67.8939 78.0269 67.7544 78.3637 67.506 78.6121C67.2577 78.8604 66.9208 78.9999 66.5696 78.9999H41.4241C41.0729 78.9999 40.736 78.8604 40.4877 78.6121C40.2393 78.3637 40.0998 78.0269 40.0998 77.6756V76.7757C40.0991 76.0829 40.235 75.3968 40.4997 74.7566C40.7644 74.1163 41.1527 73.5346 41.6425 73.0446C42.1322 72.5546 42.7137 72.166 43.3538 71.901C43.9939 71.6359 44.6799 71.4997 45.3727 71.5001H45.3754Z" stroke="#984DDD" stroke-width="4" stroke-linecap="round"/>
</svg>`
  }
];

export function useLearnGerman() {
  // could compute anything (e.g., dynamic data) here
  const items = useMemo(() => FEATURES, []);
  return { COLORS, items };
}

export default useLearnGerman;
