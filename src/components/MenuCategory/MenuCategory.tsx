import type { MenuCategory as MenuCategoryType } from "../../types/menu";
import { useLanguage } from "../../contexts/LanguageContext";
import MenuItem from "../MenuItem/MenuItem";
import "./MenuCategory.css";

interface MenuCategoryProps {
  category: MenuCategoryType;
}

const categoryIcons: Record<string, string> = {
  panini: "🥪",
  tostoni: "🍞",
  insalate: "🥗",
  fritti: "🍟",
  bevande: "🥤",
};

function MenuCategory({ category }: MenuCategoryProps) {
  const { language } = useLanguage();

  return (
    <section
      className={`menu-category menu-category--${category.id}`}
      id={category.id}
    >
      <div className="menu-category__header">
        <span className="menu-category__icon" aria-hidden="true">
          {categoryIcons[category.id] ?? "•"}
        </span>

        <h2 className="menu-category__title">
          {category.title[language]}
        </h2>

        <div className="menu-category__line" aria-hidden="true" />
      </div>

      <div className="menu-category__items">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

      {category.notes && (
        <div className="menu-category__notes">
          {category.notes.map((note, index) => (
            <p key={`${category.id}-note-${index}`}>
              {note[language]}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

export default MenuCategory;