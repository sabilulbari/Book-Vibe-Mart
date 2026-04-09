import React, { createContext, useState} from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {
    const [booksRead, setBooksRead] = useState([]);
    
      const handleReadBooks = (read) => {
        const isExistBook = booksRead.find((result) => result.bookId === read.bookId);
    
        if (isExistBook) {
          toast.error("This book is already reads");
        } else {
          setBooksRead([...booksRead, read]);
          toast.success(`"${read.bookName}" book is added to read list`);
        }
      };

    const data = {
      booksRead,
      setBooksRead,
      handleReadBooks
    };
    return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;