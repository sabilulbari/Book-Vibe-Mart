import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Components/sheared/homepage/Context/BookContext";

const Bookdetails = () => {
  const { bookId } = useParams();
  const allBooks = useLoaderData();

  const bookData = allBooks.find((book) => book.bookId == bookId);
  const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = bookData;

  

  const storeBook = useContext(BookContext);
  const { handleReadBooks, handleWishBook} = storeBook;
  

  return (
    <div className=" grid grid-cols-2 md:grid-cols-10  bg-base-100 w-[90%] mx-auto mt-8 work-sans">
      <div className=" flex items-center col-span-2 justify-center md:col-span-4 p-6 bg-base-200 rounded-xl">
        <img className="max-h-100 rounded-lg" src={image} />
      </div>
      <div className="card-body col-span-2 md:col-span-6 space-y-3">
        <h2 className="card-title font-bold text-[40px] text-[#131313]">{bookName}!</h2>
        <p className="font-medium text-[20px] text-[#131313]">By : {author}</p>
        <hr className="text-[#131313b3]" />
        <p className="text-[20px] text-[#131313] font-semibold">{category}</p>
        <hr className="text-[#131313b3]" />
        <p className="text-[#131313] text-[14px]">
          <strong>Review :</strong> {review}
        </p>
        <div className="flex  gap-2">
          <strong>Tag</strong>
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-secondary border-none text-[14px] font-medium bg-green-50 text-green-600 ">
              {tag}
            </div>
          ))}
        </div>
        <hr className="text-[#131313b3]" />

        <div className="flex gap-10 text-[10px] sm:text-[12px] md:text-[16px]">
          <div>
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year Of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div>
            <p>
              <strong>{totalPages}</strong>
            </p>
            <p>
              <strong>{publisher}</strong>
            </p>
            <p>
              <strong>{yearOfPublishing}</strong>
            </p>
            <p>
              <strong className=" block">{rating}</strong>
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-accent" onClick={() => handleReadBooks(bookData)}>
            Read
          </button>
          <button className="btn btn-info text-white" onClick={() => handleWishBook(bookData)}>
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
