import Home from "../pages/Home";
import List from "../pages/List";
import DatePick from "../pages/DatePick";
import Book from "../pages/Book.jsx";
const adminRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/list",
    element: List,
  },
  {
    path: "/testDatePicker",
    element: DatePick,
  },
  {
    path: "/book",
    element: Book,
  },
];

export default adminRoutes;
