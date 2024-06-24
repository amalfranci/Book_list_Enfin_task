import { Schema,Document,model } from "mongoose";


interface IBook extends Document{

    name: string;
    description: string;
    publishDate: Date;
    price: number;

}

const bookSchema = new Schema<IBook>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    publishDate: { type: Date, required: true },
    price: { type: Number, required: true }
  });

  const Book = model<IBook>('Book', bookSchema);

  export default Book;