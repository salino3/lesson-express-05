import {Schema, model} from 'mongoose';
import { Book } from './book.model.js';

const bookSchema = new Schema<Book>({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  releaseDate: {
    type: Schema.Types.Date,
    required: true,
  },
  author: {
    type: Schema.Types.String,
    required: true,
  },
});

export const bookContext = model<Book>('Book', bookSchema);



