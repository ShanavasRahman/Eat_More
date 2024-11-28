import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body/Body";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPage";
import { lazy, Suspense } from "react";
import CardSkeleton from "./Components/Body/CardSkeleton";

function App() {
  return (
    <div class='absolute top-0 z-[-2] h-auto w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const RestaurantMenu = lazy(() => import("./Components/RestuarantMenu"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resmenu/:id",
        element: <Suspense fallback={<div><CardSkeleton/></div>}><RestaurantMenu/></Suspense>
      }
    ],
    errorElement:<ErrorPage/>
  },
]);

export default appRouter;
