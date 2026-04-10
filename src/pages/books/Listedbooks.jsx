import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Components/sheared/homepage/Context/BookContext";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ChevronDown } from "lucide-react";
import ListOfRead from "../../Components/sheared/ReadList/ListOfRead";
import WishLeast from "../../Components/sheared/Wish-readlist/WishLeast";

const Listedbooks = () => {
  const getReadbooks = useContext(BookContext);
  const { booksRead, wishedBook } = getReadbooks;

  // Sorting data
  const [sortType, setSortType] = useState("");
  const [sortedReadList, setSortedReadList] = useState(booksRead);
  const [sortedWishlist, setSortedWishlist] = useState(wishedBook);

  // Sorting for ReadList
  useEffect(() => {
    if(sortType){
      if(sortType === 'pages'){
        const sortedData = [...booksRead].sort((a,b)=> a.totalPages - b.totalPages)
        setSortedReadList(sortedData);
      }
      else if(sortType === 'rating'){
        const sortedData = [...booksRead].sort((a, b) => a.rating - b.rating)
        setSortedReadList(sortedData);
      }
    }
  }, [sortType, booksRead]);


  useEffect(() => {
    if (sortType) {
      if (sortType === "pages") {
        const sortedData = [...wishedBook].sort((a, b) => a.rating - b.rating);
        setSortedWishlist(sortedData);
      } else if (sortType === "rating") {
        const sortedData = [...wishedBook].sort((a, b) => a.rating - b.rating);
        setSortedWishlist(sortedData);
      }
    }
  }, [sortType, wishedBook]);


 


  return (
    <div className="w-[90%] mx-auto space-y-8">
      <div className="bg-[#13131316] p-8 mt-2 rounded-xl text-center">
        <h1 className="font-bold text-[28px]">Books</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="dropdown dropdown-center ">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">
            Sort by: <span className="text-[#1E3A8A] font-bold">{sortType}</span> <ChevronDown />
          </div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
            <li className="hover:bg-[#23BE0A] hover:text-white rounded-box">
              <a onClick={() => setSortType("pages")}>Pages</a>
            </li>
            <li className="hover:bg-[#23BE0A] hover:text-white rounded-box">
              <a onClick={() => setSortType("rating")}>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Readlist</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {sortedReadList.length === 0 ? (
            <div className="bg-base-200 text-[#131313] flex items-center justify-center h-50 rounded-xl">
              <h1 className="text-center items-center font-bold text-2xl">No Books added to read</h1>
            </div>
          ) : (
            sortedReadList.map((bookRead) => <ListOfRead key={bookRead.bookId} bookRead={bookRead}></ListOfRead>)
          )}
        </TabPanel>
        <TabPanel>
          <h2>Wishlist: {wishedBook.length} </h2>
          {sortedWishlist.length === 0 ? (
            <div className="bg-base-200 text-[#131313] flex items-center justify-center h-50 rounded-xl">
              <h1 className="text-center items-center font-bold text-2xl">No Books added on wish list</h1>
            </div>
          ) : (
            sortedWishlist.map((wishBook) => <WishLeast key={wishBook.bookId} wishBook={wishBook} />)
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Listedbooks;
