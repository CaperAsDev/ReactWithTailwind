export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type Order = {
  date: Date
  price: number
  products: Product[]
  id: `${string}-${string}-${string}-${string}-${string}`
};

export type ShoppingContextValue = {
  cartProducts: Product[],
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>
  isDetailOpen: boolean
  setIsDetailOpen: React.Dispatch<React.SetStateAction<boolean>>
  productSelected: Product
  setProductSelected: React.Dispatch<React.SetStateAction<Product>>
  isMyOrderOpen: boolean
  setIsMyOrderOpen: React.Dispatch<React.SetStateAction<boolean>>
  myOrders: Order[]
  setMyOrders: React.Dispatch<React.SetStateAction<Order[]>>
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  searchedValue: string
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>
  productsToRender: Product[]
  setProductsToRender: React.Dispatch<React.SetStateAction<Product[]>>
};
