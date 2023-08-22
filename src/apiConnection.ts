import axios from 'axios';
import { Product } from './types';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  method: 'GET',
});

export async function getAll(setData:React.Dispatch<React.SetStateAction<Product[]>>) {
  const { data } = await api<Array<Product>>('');
  setData(data);
  return data;
}

export async function getCategories() {
  const { data } = await api('/categories');
  return data;
}

export async function getById(id:number): Promise<Product> {
  const { data } = await api(`/${id}`);
  return data;
}

export async function getByCategory(catName:string): Promise<Product[]> {
  const { data } = await api(`/category/${catName}`);
  return data;
}
