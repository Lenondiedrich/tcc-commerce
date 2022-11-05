import axios from "axios"

export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images?: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface ApiResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[]
}

export const getAllProducts = async() => {
  const { data } = await axios.get<ApiResponse>('https://dummyjson.com/products');
  return data;
}

export const getProductsByCategory = async (category: string) => {
  const { data } = await axios.get<ApiResponse>(`https://dummyjson.com/products/category/${category}`)
  return data
}

export const getProductById = async (id: string) => {
  const { data } = await axios.get<Product>(`https://dummyjson.com/products/${id}`)

  return data;
}