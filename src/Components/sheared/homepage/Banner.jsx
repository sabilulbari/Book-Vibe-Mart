import React from 'react';
import book from '../../../assets/book.png'

const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-screen w-[90%] mx-auto rounded-2xl my-12">
        <div className="hero-content flex-col lg:justify-between lg:flex-row-reverse">
          <img src={book} className="md:max-w-sm " />
          <div>
            <h1 className="text-2xl md:text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <a className="btn bg-[#23BE0A] text-white mt-12">View The List</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;