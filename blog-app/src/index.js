import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import HomeCard from "./components/HomeCard";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Card from "./components/Card";
import ErrorPage from "./components/ErrorPage";
import BlogForm from "./components/BlogCreationForm";
import Allblogs from './components/AllBlogs';






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
        element: <BlogForm />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Collections",
        element: <Card />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Favourites",
        element: <Allblogs />,
        errorElement: <ErrorPage/>
      },
     

    ],

  },

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRouter}/>
);


