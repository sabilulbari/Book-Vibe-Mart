import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {

    const { image, bookName, tags, bookId, author, category, rating } = book;

  return (
    <Link to={`/bookDetails/${bookId}`} className="card bg-base-100 shadow-sm p-4 work-sans border border-gray-300">
      <div className="bg-base-200 flex items-center rounded-xl justify-center p-4">
        <img className="h-50 rounded-lg" src={image} alt="Shoes" />
      </div>
      <div className="card-body text-[#131313ca]">
        <div className="flex  gap-2">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-secondary border-none text-[14px] font-medium bg-green-50 text-green-600 ">
              {tag}
            </div>    
          ))}
        </div>

        <h2 className="card-title font-bold text-[24px] ">{bookName}</h2>
        <p className="font-medium">By : {author}</p>
        <div
          className="card-actions justify-between
         border-t-2 border-dashed border-[#8d8a8a] pt-4  flex "
        >
          <div className="">{category}</div>
          <div className="flex justify-between gap-2 items-center">
            {rating} <Star />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
