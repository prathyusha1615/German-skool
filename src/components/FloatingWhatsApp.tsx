// components/FloatingWhatsApp.tsx
export default function FloatingWhatsApp() {
  const message = encodeURIComponent("Hello");
  return (
    <a
      href={`https://wa.me/919579365329?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed z-50
                 bottom-[max(1rem,env(safe-area-inset-bottom))]
                 left-[max(1rem,env(safe-area-inset-left))]
                 flex"
    >
      <img
        src="https://media.onlinegermanskool.com/assets/whatsapp_icon.png"
        alt=""
        className="h-12 w-12 rounded-full cursor-pointer shadow-lg"
      />
    </a>
  );
}
