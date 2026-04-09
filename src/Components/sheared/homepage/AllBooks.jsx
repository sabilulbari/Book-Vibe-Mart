import React, { use } from "react";
import Book from "./Book";

const fetchData = fetch('/booksData.json').then((res)=> res.json());

const AllBooks = () => {
    const booksData = use(fetchData);
    return (
      <div className="w-[90%] mx-auto space-y-9">
        <h1 className="work-sans text-center font-bold text-4xl text-[#131313] ">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {booksData.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>
    );
};

export default AllBooks;

