import { useLanguage } from "../../contexts/LanguageContext";
import type { Language } from "../../types/menu";
import "./LanguageSelector.css";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "it", label: "IT", flag: "🇮🇹" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-selector" aria-label="Language selector">
      {languages.map((item) => {
        const isActive = language === item.code;

        return (
          <button
            key={item.code}
            type="button"
            className={`language-selector__button ${
              isActive ? "language-selector__button--active" : ""
            }`}
            onClick={() => setLanguage(item.code)}
            aria-pressed={isActive}
          >
            <span className="language-selector__flag">{item.flag}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSelector;