import { BookRepository } from "./book.repository.js";
import { Book } from "../book.model.js";
import {bookContext} from '../book.context.js';
import { ObjectId } from 'mongodb';

export const dbRepository: BookRepository = {
  getBookList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * page : 0;
    const limit = pageSize ?? 0;
   return await bookContext.find().skip(skip).limit(limit).lean();
  },
  getBook: async (id: string) => {
    return await bookContext.findOne({
      _id: new ObjectId(id),
    }).lean();
  },
  saveBook: async (book: Book) => {
    return await bookContext.findOneAndUpdate(
      {
        _id: book._id,
      },
      {
        $set: book,
      },
      {
        upsert: true,
        returnDocument: 'after',
      }
    ).lean();
  },
  deleteBook: async (id: string) => {
   const {deletedCount} = await bookContext.deleteOne({
      _id: new ObjectId(id)
    });

    return deletedCount === 1;
  },
};
