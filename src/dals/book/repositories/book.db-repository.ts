import { db } from '#core/servers/index.js';
import { BookRepository } from "./book.repository.js";
import { Book } from "../book.model.js";

export const dbRepository: BookRepository = {
  getBookList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * page : 0;
    const limit = pageSize ?? 0;
   return await db.collection<Book>("books").find()
   .skip(skip)
   .limit(limit)
   .toArray();
  },
  getBook: async (id: string) => {
    throw new Error("Not implemented");
  },
  saveBook: async (book: Book) => {
    return await db.collection<Book>("books").findOneAndUpdate({
      _id: book._id
     }, {
      $set: book
     }, {
      upsert: true,
      returnDocument: 'after'
     });
  },
  deleteBook: async (id: string) => {
    throw new Error("Not implemented");
  },
};
