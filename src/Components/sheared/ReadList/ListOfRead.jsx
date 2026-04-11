import { FileSpreadsheet, MapPin, User } from "lucide-react";
import { Link } from "react-router";

const ListOfRead = ({ bookRead, sortType }) => {
  const { author, bookName, category, image, publisher, rating, bookId, tags, totalPages, yearOfPublishing } = bookRead;

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm p-4">
      <div className="p-5 bg-base-200 rounded-xl flex items-center justify-center">
        <img className=" max-w-30 rounded-sm " src={image} alt="Album" />
      </div>
      <div className="card-body space-y-1 relative">
        <h2 className="card-title">{bookName}</h2>
        <p>By : {author}</p>
        <div className="flex  gap-2">
          <div className="flex gap-2">
            <strong>Tag</strong>
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-secondary border-none text-[14px] font-medium bg-green-50 text-green-600 ">
                {tag}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4.5" /> Year of publishing: {yearOfPublishing}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-4 items-center">
            <User /> Publisher: {publisher}
          </div>
          <div className="flex gap-4 items-center">
            <FileSpreadsheet /> Page: {totalPages}
          </div>
        </div>
        <hr />
        <div className="card-actions">
          <button className="badge border-none text-[16px] font-medium bg-[#328eff28] text-[#328EFF] text-center items-center p-5 rounded-full ">Category: {category}</button>
          <button className="badge badge-secondary border-none text-[16px] font-medium bg-[#ffad3326] text-[#FFAC33] text-center p-5 rounded-full items-center">
            Rating: {rating}
          </button>
          <Link to={`/bookDetails/${bookId}`}>
            <button className="btn bg-[#23BE0A] text-[16px] text-white rounded-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListOfRead;
