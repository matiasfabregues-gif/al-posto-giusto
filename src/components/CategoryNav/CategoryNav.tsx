import { menu } from "../../data/menu";
import { useLanguage } from "../../contexts/LanguageContext";
import "./CategoryNav.css";

const categoryIcons: Record<string, string> = {
  panini: "🥪",
  tostoni: "🍞",
  insalate: "🥗",
  fritti: "🍟",
  bevande: "🥤",
};

function CategoryNav() {
  const { language } = useLanguage();

  const handleCategoryClick = (categoryId: string) => {
    const section = document.getElementById(categoryId);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="category-nav" aria-label="Menu categories">
      <div className="category-nav__content">
        {menu.map((category) => (
          <button
            key={category.id}
            type="button"
            className="category-nav__button"
            onClick={() => handleCategoryClick(category.id)}
          >
            <span className="category-nav__icon" aria-hidden="true">
              {categoryIcons[category.id]}
            </span>

            <span>{category.title[language]}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default CategoryNav;