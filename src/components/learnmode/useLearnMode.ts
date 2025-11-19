'use client';

export type LearnModeItem = {
  id: 'solo' | 'squad';
  title: string;
  lead: string;         
  bullets: string[];
  image: string;        
  alt: string;
};

export default function useLearnMode() {
  const UI = {
    brand: '#984DDD',
    primary: '#242325',
    secondary: '#47464A',
    tertiary: '#6B6A70',
    captionBg: '#F0EFF1',
    captionBorder: '#E0DFE3',
  };

  const items: LearnModeItem[] = [
    {
      id: 'solo',
      title: '1-on-1 Mastery Mode',
      lead: 'For solo learners who want full focus',
      bullets: [
        'Your Personal Learning Blueprint',
        '1-on-1 Mentorship',
        'Hyper-Focused Skill Building',
        'Learn at your pace, your way',
      ],
      image: 'https://media.onlinegermanskool.com/assets/image4.svg', // put an image in public
      alt: 'Tutor guiding a student in a one-on-one session',
    },
    {
      id: 'squad',
      title: 'Power of 6 Mode',
      lead: 'For learners who grow in small squads',
      bullets: [
        'Team-Based Learning Plan',
        'Exclusive 6-Student Batch',
        'Dynamic Group Sessions',
        'Interactive & Engaging Environment',
      ],
      image: 'https://media.onlinegermanskool.com/assets/image6.svg', // put an image in public
      alt: 'Small study group working together with a tutor',
    },
  ];

  return { UI, items };
}
