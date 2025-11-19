export default function useFreeClass() {
  // Colors centralised so you can theme quickly
  const UI = {
    panelBg: '#826BFB',            
    title: '#F0EFF1',
    subtitle: '#E0DFE3',
    // badge
    badgeText: '#F0EFF1',
    badgeBorder: '#FFFFFF',
    badgeBg: 'transparent',
    // CTA
    ctaBg: '#FFFFFF',
    ctaText: '#984DDD',
  };

  const content = {
    badge: 'Free Class Offer',
    titleLine1: 'Experience Before',
    titleLine2: 'You Commit',
    subtitle:
      'Book a free trial class and see how easy and fun learning German can be.',
    cta: 'Book Free Trial Class',
    image:
      'https://media.onlinegermanskool.com/assets/freeoffer.svg', // replace with your asset
    imageAlt: 'Learner taking an online German trial class',
  };

  // Wire to your router / modal / analytics
  const onCta = () => {
    // e.g., router.push('/book') or open modal
    // console.log('Book Free Trial Class');
  };

  return { UI, content, onCta };
}
