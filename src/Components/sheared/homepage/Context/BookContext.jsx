import React, { createContext, useState} from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {
    const [booksRead, setBooksRead] = useState([]);
  const [wishedBook, setWishedBook] = useState([]);
    
      const handleReadBooks = (read) => {
        const isExistBook = booksRead.find((result) => result.bookId === read.bookId);
    
        if (isExistBook) {
          toast.error("This book is already reads");
        } else {
          setBooksRead([...booksRead, read]);
          toast.success(`"${read.bookName}" book is added to read list`);
        }
      };

      const handleWishBook = (wish)=>{

       const isExistInReadsBook = booksRead.find((result) => result.bookId === wish.bookId);

       if(isExistInReadsBook){
        toast.error(`"${wish.bookName}" is already added on Readlist`);
        return
       }



        const isExistWish = wishedBook.find((result) => result.bookId === wish.bookId);
        
        if (isExistWish) {
          toast.error("This book is already in Wish List");
        } else {
          setWishedBook([...wishedBook, wish]);
          toast.success(`"${wish.bookName}" book is added to wish list`);
        }
        
      }

    const data = {
      booksRead,
      setBooksRead,
      handleReadBooks,
      wishedBook,
      setWishedBook,
      handleWishBook,
    };
    return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;