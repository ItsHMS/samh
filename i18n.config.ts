import en from "./locales/en.json";
import ar from "./locales/ar.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ar",
  fallbackLocale: "en",
  messages: {
    en,
    ar,
  },
  locales: [
    { code: "en", iso: "en-US", name: "English", dir: "ltr" },
    { code: "ar", iso: "ar-SA", name: "العربية", dir: "rtl" },
  ],
  defaultLocale: "ar",
}));
