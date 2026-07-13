export type Language = "it" | "en" | "es";

export interface Translation {
  it: string;
  en: string;
  es: string;
}

export interface MenuItem {
  id: string;
  name: Translation;
  description?: Translation;
  price: number;
  image?: string;
  available?: boolean;
  frozen?: boolean;
}

export interface MenuCategory {
  id: string;
  title: Translation;
  items: MenuItem[];
  notes?: Translation[];
}