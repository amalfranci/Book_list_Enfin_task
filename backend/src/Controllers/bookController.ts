import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import Book from '../models/Book'; 


//  validatio from serve side

export const validateBook = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('publishDate').isISO8601().withMessage('Publish date must be a valid date'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
];

export const addBook = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, description, publishDate, price } = req.body;
    const newBook = new Book({ name, description, publishDate, price });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};


//  this id for get book list with pagniation
export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { search, page = 1, limit = 10 } = req.query;
      const query = search ? { $or: [{ name: new RegExp(search as string, 'i') }, { description: new RegExp(search as string, 'i') }] } : {};
      const books = await Book.find(query)
        .limit(Number(limit))
        .skip((Number(page) - 1) * Number(limit));
      const count = await Book.countDocuments(query);
      res.json({ data: books, totalPages: Math.ceil(count / Number(limit)) });
    } catch (error) {
      next(error);
    }
  };
