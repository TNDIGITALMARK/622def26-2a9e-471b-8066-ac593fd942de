export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  type: "new" | "pre-owned";
  category: "luxury" | "electric" | "suv" | "sedan" | "coupe";
  image: string;
  description: string;
}

export const mockCars: Car[] = [
  {
    id: "1",
    make: "Aurora",
    model: "Genesis IV Sedan",
    year: 2024,
    price: 125000,
    type: "new",
    category: "luxury",
    image: "/generated/genesis-iv-sedan.png",
    description: "Luxury performance sedan with cutting-edge technology"
  },
  {
    id: "2",
    make: "Aurora",
    model: "Spectre SUV",
    year: 2024,
    price: 145000,
    type: "new",
    category: "suv",
    image: "/generated/spectre-suv.png",
    description: "Premium luxury SUV for the modern family"
  },
  {
    id: "3",
    make: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: 110000,
    type: "new",
    category: "electric",
    image: "/placeholder.svg",
    description: "High-performance electric sedan"
  },
  {
    id: "4",
    make: "BMW",
    model: "M8 Gran Coupe",
    year: 2023,
    price: 95000,
    type: "pre-owned",
    category: "luxury",
    image: "/placeholder.svg",
    description: "Pre-owned luxury performance coupe"
  },
  {
    id: "5",
    make: "Mercedes",
    model: "EQS 580",
    year: 2024,
    price: 135000,
    type: "new",
    category: "electric",
    image: "/placeholder.svg",
    description: "Luxury electric sedan with premium features"
  },
  {
    id: "6",
    make: "Audi",
    model: "RS e-tron GT",
    year: 2023,
    price: 88000,
    type: "pre-owned",
    category: "electric",
    image: "/placeholder.svg",
    description: "Pre-owned electric grand tourer"
  },
  {
    id: "7",
    make: "Porsche",
    model: "Cayenne Turbo S",
    year: 2024,
    price: 180000,
    type: "new",
    category: "suv",
    image: "/placeholder.svg",
    description: "High-performance luxury SUV"
  },
  {
    id: "8",
    make: "Bentley",
    model: "Continental GT",
    year: 2023,
    price: 165000,
    type: "pre-owned",
    category: "coupe",
    image: "/placeholder.svg",
    description: "Pre-owned luxury grand tourer"
  },
  {
    id: "9",
    make: "Rolls-Royce",
    model: "Ghost",
    year: 2024,
    price: 450000,
    type: "new",
    category: "luxury",
    image: "/placeholder.svg",
    description: "Ultimate luxury sedan"
  },
  {
    id: "10",
    make: "Lamborghini",
    model: "Urus",
    year: 2023,
    price: 220000,
    type: "pre-owned",
    category: "suv",
    image: "/placeholder.svg",
    description: "Pre-owned super SUV"
  }
];

export function searchCars(query: string): Car[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  return mockCars.filter(car => 
    car.make.toLowerCase().includes(searchTerm) ||
    car.model.toLowerCase().includes(searchTerm) ||
    car.category.toLowerCase().includes(searchTerm) ||
    car.type.toLowerCase().includes(searchTerm) ||
    `${car.make} ${car.model}`.toLowerCase().includes(searchTerm)
  );
}