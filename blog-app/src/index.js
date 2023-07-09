import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import HomeCard from "./components/HomeCard";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import BlogCard from "./components/BlogCard";
import ErrorPage from "./components/ErrorPage";
import BlogCreationForm from "./components/BlogCreationForm";
import FavouriteBlogs from './components/FavouriteBlogs';
const AppLayout = () => {
  return (
    <div className="w-full">

      <Header />
      <Outlet/>
      <Footer/>
  </div>);
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeCard />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Write-Blog",
        element: <BlogCreationForm />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Collections",
        element: <BlogCard />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Favourites",
        element: <FavouriteBlogs/>,
        errorElement: <ErrorPage/>
      },
    ],

  },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRouter}/>
);


