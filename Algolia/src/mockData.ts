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

const baseProducts: Product[] = [
  {
    id: "1",
    name: "Philips - Hue White and Color Ambiance A19 Add-on Smart LED bulb (3rd Gen) - Multicolor",
    description: "Set a beautiful mood with this Philips hue white and color ambiance bulb.",
    brand: "Philips",
    category: "SMART HOME",
    price: 49.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1550505194-436f9a0c7760?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "2",
    name: "Sony - $20 PlayStation Network Card",
    description: "Broaden the content you enjoy on your PlayStation system.",
    brand: "Sony",
    category: "VIDEO GAMES",
    price: 20.00,
    rating: 4,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "3",
    name: "Sharp - 43\" Class (42.5\" Diag.) - LED - 1080p - Smart - HDTV - Roku TV - Black",
    description: "Only at Best Buy This Sharp Roku TV features integrated Roku...",
    brand: "Sharp",
    category: "TV & HOME THEATER",
    price: 299.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=400",
    freeShipping: false,
  },
  {
    id: "4",
    name: "Sharp - 40\" Class (40\" Diag.) - LED - 1080p - HDTV - Black",
    description: "Watch your favorite show on this 40-inch Sharp television...",
    brand: "Sharp",
    category: "TV & HOME THEATER",
    price: 249.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "5",
    name: "Amazon - Fire HD8 - 8\" - Tablet - 16GB - Wi-Fi - Black",
    description: "Amazon Fire HD 8 Tablet: With a vivid 8\" touch screen...",
    brand: "Amazon",
    category: "COMPUTERS & TABLETS",
    price: 89.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "6",
    name: "Harman/kardon - Onyx Mini Portable Wireless Speaker - Gray",
    description: "Enjoy wireless streaming and hands-free phone calls...",
    brand: "Harman/kardon",
    category: "AUDIO",
    price: 199.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400",
    freeShipping: false,
  },
  {
    id: "7",
    name: "Samsung - 55\" Class (54.6\" Diag.) - LED - 2160p - Smart - 4K Ultra HD TV - Black",
    description: "Enjoy movies, television and music with this Samsung...",
    brand: "Samsung",
    category: "TV & HOME THEATER",
    price: 799.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "8",
    name: "HP - 61 2-Pack Ink Cartridges - Black/Cyan/Magenta/Yellow",
    description: "This combo pack contains 1 black ink cartridge and 1...",
    brand: "HP",
    category: "OFFICE & SCHOOL SUPPLIES",
    price: 39.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "9",
    name: "Lenovo - 100S-14IBR 14\" Laptop - Intel Celeron - 2GB Memory - 32GB eMMC Flash Memory - Blue",
    description: "Lenovo 100S-14IBR Laptop: Take this Lenovo Ideapad...",
    brand: "Lenovo",
    category: "COMPUTERS & TABLETS",
    price: 229.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "10",
    name: "HP - 15.6\" Touch-Screen Laptop - Intel Core i3 - 6GB Memory - 1TB Hard Drive - Black",
    description: "HP Laptop: Power through your daily work on this HP...",
    brand: "HP",
    category: "COMPUTERS & TABLETS",
    price: 399.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  },
  {
    id: "11",
    name: "Insignia™ - 24\" Class (23.6\" Diag.) - LED - 720p - HDTV - Black",
    description: "Upgrade your home entertainment system with...",
    brand: "Insignia",
    category: "TV & HOME THEATER",
    price: 129.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=400",
    freeShipping: false,
  },
  {
    id: "12",
    name: "HP - 564XL High-Yield Ink Cartridge - Black",
    description: "This ink cartridge is compatible with select HP...",
    brand: "HP",
    category: "OFFICE & SCHOOL SUPPLIES",
    price: 26.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=400",
    freeShipping: true,
  }
];

export const mockProducts: Product[] = [
  ...baseProducts,
  ...baseProducts.map(p => ({ ...p, id: p.id + "_copy2" })),
  ...baseProducts.map(p => ({ ...p, id: p.id + "_copy3" }))
];

export const mockCategories = [
  { name: "Appliances", count: 40 },
  { name: "Audio", count: 207 },
  { name: "Cameras & Camcorders", count: 59 },
  { name: "Car Electronics & GPS", count: 10 },
  { name: "Cell Phones", count: 60 },
  { name: "Computers & Tablets", count: 173 },
  { name: "Health, Fitness & Beauty", count: 9 },
  { name: "Office & School Supplies", count: 95 },
  { name: "TV & Home Theater", count: 139 },
];

export const mockBrands = [
  { name: "Apple", count: 45 },
  { name: "Samsung", count: 52 },
  { name: "Sony", count: 28 },
  { name: "Dell", count: 18 },
  { name: "LG", count: 22 },
  { name: "Bose", count: 14 },
];
