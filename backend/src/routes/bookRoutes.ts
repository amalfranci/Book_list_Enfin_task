import { Router } from "express";

import { addBook,getBooks } from "../Controllers/bookController";

const router =Router()

router.post('/books',addBook)
router.get('/books',getBooks)



export default router