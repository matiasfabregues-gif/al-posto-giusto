import { useLanguage } from "../../contexts/LanguageContext";
import logo from "../../assets/images/logo-al-posto-giusto.jpeg";
import "./Header.css";

const content = {
  it: {
    location: "Street food a Pollara, Salina",
    tagline: "Panini, tostoni, fritti e sapori eoliani",
    rating: "5 stelle su Tripadvisor",
  },
  en: {
    location: "Street food in Pollara, Salina",
    tagline: "Sandwiches, toasties, fried food and Aeolian flavors",
    rating: "5 stars on Tripadvisor",
  },
  es: {
    location: "Street food en Pollara, Salina",
    tagline: "Sándwiches, tostados, fritos y sabores eolianos",
    rating: "5 estrellas en Tripadvisor",
  },
};

function Header() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <header className="header">
      <div className="header__content">
        <img
          className="header__logo"
          src={logo}
          alt="Al Posto Giusto"
        />

        <p className="header__location">{text.location}</p>

        <h1 className="header__title">Al Posto Giusto</h1>

        <p className="header__tagline">{text.tagline}</p>

        <div className="header__rating" aria-label={text.rating}>
          <span className="header__stars" aria-hidden="true">
            ★★★★★
          </span>
          <span>{text.rating}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;