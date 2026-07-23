/**
 * Guarded PWA registration. Runs only in production browsers on the real site,
 * never in Lovable preview iframes, dev, or when the ?sw=off kill switch is set.
 */
export function registerPwa() {
  if (typeof window === "undefined") return;
  if (!("serviceWorker" in navigator)) return;

  const isProd = import.meta.env.PROD;
  const inIframe = window.self !== window.top;
  const host = window.location.hostname;
  const killSwitch = new URLSearchParams(window.location.search).get("sw") === "off";
  const isPreviewHost =
    host.startsWith("id-preview--") ||
    host.startsWith("preview--") ||
    host === "lovableproject.com" ||
    host.endsWith(".lovableproject.com") ||
    host === "lovableproject-dev.com" ||
    host.endsWith(".lovableproject-dev.com") ||
    host === "beta.lovable.dev" ||
    host.endsWith(".beta.lovable.dev");

  const refuse = !isProd || inIframe || isPreviewHost || killSwitch;

  if (refuse) {
    // Clean up any existing app service workers we previously registered.
    navigator.serviceWorker
      .getRegistrations()
      .then((regs) => {
        regs.forEach((r) => {
          const url = r.active?.scriptURL ?? r.installing?.scriptURL ?? r.waiting?.scriptURL ?? "";
          if (url.endsWith("/sw.js")) r.unregister();
        });
      })
      .catch(() => undefined);
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => undefined);
  });
}
