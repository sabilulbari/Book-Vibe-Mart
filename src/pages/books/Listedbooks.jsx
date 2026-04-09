import React, { useContext } from "react";
import { BookContext } from "../../Components/sheared/homepage/Context/BookContext";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ChevronDown } from "lucide-react";
import ListOfRead from "../../Components/sheared/ReadList/ListOfRead";
import WishLeast from "../../Components/sheared/Wish-readlist/WishLeast";

const Listedbooks = () => {
  const getReadbooks = useContext(BookContext);
  const { booksRead, wishedBook } = getReadbooks;
  return (
    <div className="w-[90%] mx-auto space-y-8">
      <div className="bg-[#13131316] p-8 mt-2 rounded-xl text-center">
        <h1 className="font-bold text-[28px]">Books</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="dropdown dropdown-center ">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">
            Sort by <ChevronDown />
          </div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
            <li className="hover:bg-[#23BE0A] hover:text-white rounded-box">
              <a>Item 1</a>
            </li>
            <li className="hover:bg-[#23BE0A] hover:text-white rounded-box">
              <a>Item 2</a>
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
          <h2>Read list: {booksRead.length}</h2>
          {booksRead.length === 0 ? (
            <div className="bg-base-200 text-[#131313] flex items-center justify-center h-50 rounded-xl">
              <h1 className="text-center items-center font-bold text-2xl">No Books added to read</h1>
            </div>
          ) : (
            booksRead.map((bookRead) => <ListOfRead key={bookRead.bookId} bookRead={bookRead}></ListOfRead>)
          )}
        </TabPanel>
        <TabPanel>
          <h2>Wishlist: {wishedBook.length} </h2>
          {booksRead.length === 0 ? (
            <div className="bg-base-200 text-[#131313] flex items-center justify-center h-50 rounded-xl">
              <h1 className="text-center items-center font-bold text-2xl">No Books added to read</h1>
            </div>
          ) : (
            wishedBook.map((wishBook) => <WishLeast key={wishBook.bookId} wishBook={wishBook} />)
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Listedbooks;
