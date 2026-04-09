import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/Error/ErrorPage";
import Bookdetails from "../pages/BookDetailes/Bookdetails";
import Listedbooks from "../pages/books/Listedbooks";
import BookToRead from "../pages/books/BookToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: '/listedBook',
        Component: Listedbooks
      },
      {
        path:'/pageToRead',
        Component: BookToRead
      },
      {
        path: "/bookDetails/:bookId",
        Component: Bookdetails,
        loader: () => fetch('/booksData.json')
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
