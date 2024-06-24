import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

const App: React.FC = () => {
  return (
    <Router>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Book Management</h1>
        <nav>
          <ul className="flex space-x-4 mb-4">
            <li>
              <Link to="/">Add Book</Link>
            </li>
            <li>
              <Link to="/books">Book List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AddBookForm />} />
          <Route path="/books" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
