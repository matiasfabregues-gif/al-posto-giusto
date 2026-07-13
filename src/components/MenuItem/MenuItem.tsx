import type { MenuItem as MenuItemType } from "../../types/menu";
import { useLanguage } from "../../contexts/LanguageContext";
import "./MenuItem.css";

interface MenuItemProps {
  item: MenuItemType;
}

function MenuItem({ item }: MenuItemProps) {
  const { language } = useLanguage();

  const formattedPrice = new Intl.NumberFormat(
    language === "it"
      ? "it-IT"
      : language === "es"
        ? "es-ES"
        : "en-GB",
    {
      style: "currency",
      currency: "EUR",
    }
  ).format(item.price);

  return (
    <article className="menu-item">
      <div className="menu-item__content">
        <div className="menu-item__heading">
          <h3 className="menu-item__name">
            {item.frozen && <span aria-hidden="true">*</span>}
            {item.name[language]}
          </h3>

          <span className="menu-item__price">{formattedPrice}</span>
        </div>

        {item.description && (
          <p className="menu-item__description">
            {item.description[language].replaceAll(",", " •")}
          </p>
        )}
      </div>
    </article>
  );
}

export default MenuItem;