'use client';

export type SegmentItem = {
  text: string;
};

export default function useSegmentation() {
  const UI = {
    // keep typography consistent with LearnMode
    primary: '#242325',
    secondary: '#47464A',
    tertiary: '#6B6A70',

    // caption pill
    captionBg: '#F0EFF1',
    captionBorder: '#E0DFE3',

    // success/check accent (green)
    success: '#2ECC71', // tweak if you need closer to your design
    successBg: '#EAF8F1',

    // CTA (same family as header/salebanner vibe)
    ctaBg: '#A190FC',
    ctaText: '#E4F1FE',
  };

  const image = {
    src: 'https://media.onlinegermanskool.com/assets/image5.svg', // place in /public or update path
    alt: 'Smiling learner studying in a cozy setting',
  };

  const items: SegmentItem[] = [
    { text: 'Students preparing for Goethe, TELC, and ÖSD exams.' },
    { text: 'Professionals applying for jobs in European Countries.' },
    { text: 'People moving to European Countries for study, work, or PR.' },
    { text: 'Travel enthusiasts who want to connect with locals.' },
  ];

  const cta = {
    label: 'Book Free Trial Class →',
    href: '/contact_us',
  };

  return { UI, image, items, cta };
}
