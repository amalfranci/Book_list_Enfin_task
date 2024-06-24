import axios from 'axios';

const API_URL = 'http://localhost:4000/api/books';

export interface Book {
  _id?: string;
  name: string;
  description: string;
  publishDate: string;
  price: number;
}

export const addBook = async (book: Omit<Book, '_id'>) => {
  const response = await axios.post(API_URL, book);
  return response.data;
};

export const getBooks = async (search: string, page: number) => {
  const response = await axios.get(API_URL, { params: { search, page } });
  return response.data;
};
