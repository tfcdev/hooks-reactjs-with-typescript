import { createContext } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  products: Product[],
  shipping_value?: number
}

const CarContext = createContext<Cart>({
  products: [{id: 1, name: "Product 01", price: 1}]
});

export default CarContext;