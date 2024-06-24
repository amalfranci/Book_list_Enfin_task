import React, { useEffect, useState } from 'react';
import { getBooks, Book } from '../services/bookService';
import Pagination from './Pagination';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    fetchBooks();
  }, [search, page]);

  const fetchBooks = async () => {
    try {
      const { data, totalPages } = await getBooks(search, page);
      setBooks(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" max-w-4xl mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-900">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Publish Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books.map((book) => (
              <tr key={book._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(book.publishDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. {book.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default BookList;
