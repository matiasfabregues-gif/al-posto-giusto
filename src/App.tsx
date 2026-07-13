import Header from "./components/Header/Header";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import CategoryNav from "./components/CategoryNav/CategoryNav";
import MenuCategory from "./components/MenuCategory/MenuCategory";
import { menu } from "./data/menu";

function App() {
  return (
    <main>
      <Header />

      <LanguageSelector />

      <CategoryNav />

      <div>
        {menu.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}

export default App;