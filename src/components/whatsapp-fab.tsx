import { CONTACT } from "@/data/site";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent("Hello Temran, I'd like to enquire about your PPE.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Temran on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 md:h-14"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.07 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.75.98 1-3.66-.22-.37a9.4 9.4 0 0 1-1.44-5.03c0-5.19 4.23-9.42 9.42-9.42 2.52 0 4.88.98 6.66 2.76a9.36 9.36 0 0 1 2.76 6.66c0 5.19-4.23 9.42-9.42 9.42Zm5.44-7.05c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
