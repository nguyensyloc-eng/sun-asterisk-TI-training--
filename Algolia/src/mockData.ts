export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  freeShipping: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Apple iPhone 14 Pro Max 256GB",
    description: "The ultimate iPhone experience with the new Dynamic Island and 48MP Main camera.",
    brand: "Apple",
    category: "Cell Phones",
    price: 1099,
    rating: 5,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "2",
    name: "Samsung Galaxy S23 Ultra",
    description: "Epic camera, epic performance. The Galaxy S23 Ultra is the ultimate smartphone.",
    brand: "Samsung",
    category: "Cell Phones",
    price: 1199,
    rating: 4,
    image: "https://images.unsplash.com/photo-1610945265064-3234eb3bf363?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 Wireless Headphones",
    description: "Industry leading noise cancellation with two processors and eight microphones.",
    brand: "Sony",
    category: "Headphones",
    price: 398,
    rating: 5,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400",
    freeShipping: false,
  },
  {
    id: "4",
    name: "Dell XPS 15 Laptop",
    description: "A perfect balance of power and portability with a stunning 15.6-inch OLED display.",
    brand: "Dell",
    category: "Laptops",
    price: 1899,
    rating: 4,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "5",
    name: "LG C2 Series 55-Inch Class OLED Smart TV",
    description: "Experience the brilliant and beautiful picture of OLED.",
    brand: "LG",
    category: "TVs",
    price: 1296,
    rating: 5,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "6",
    name: "Bose QuietComfort Earbuds II",
    description: "Personalized noise cancellation and sound performance.",
    brand: "Bose",
    category: "Headphones",
    price: 299,
    rating: 4,
    image: "https://images.unsplash.com/photo-1606220588913-b3aecb492021?auto=format&fit=crop&q=80&w=400",
    freeShipping: false,
  }
];

export const mockCategories = [
  { name: "Cell Phones", count: 120 },
  { name: "Headphones", count: 85 },
  { name: "Laptops", count: 42 },
  { name: "TVs", count: 36 },
];

export const mockBrands = [
  { name: "Apple", count: 45 },
  { name: "Samsung", count: 52 },
  { name: "Sony", count: 28 },
  { name: "Dell", count: 18 },
  { name: "LG", count: 22 },
  { name: "Bose", count: 14 },
];
