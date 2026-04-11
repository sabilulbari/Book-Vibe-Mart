import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/Error/ErrorPage";
import Bookdetails from "../pages/BookDetailes/Bookdetails";
import Listedbooks from "../pages/books/Listedbooks";
import BookChart from "../Components/sheared/Read-Charts/PageToRead";


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
        path: "/listedBook",
        Component: Listedbooks,
      },
      {
        path: "/bookChart",
        Component: BookChart,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/bookDetails/:bookId",
        Component: Bookdetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
