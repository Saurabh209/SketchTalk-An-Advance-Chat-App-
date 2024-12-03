import React from "react";
import { Link } from "react-router-dom";



import LoginSignup from "./Components/loginSignup/loginSignup.jsx";
import Header from "./Components/homePage/header/Header.jsx";
import Footer from "./Components/homePage/footer/Footer.jsx";
import Body from "./Components/homePage/body/Body.jsx";
import Page_0 from "./Components/page_0/Page_0.jsx";
import Features_page from "./Components/features_page/features_page.jsx";
import About from "./Components/about_page/About.jsx";
import Explore from "./Components/explore_page/Explore.jsx";
import Registration from "./Components/loginSignup/Registration.jsx";



import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Body />
        <Footer />
      </div>
    ),
  },
  {
    path: "/login",
    element: <LoginSignup />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/page_0",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Page_0 />
        <Footer />
      </div>
    ),
  },
  {
    path: "/features",
    element: 
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Features_page />
        <Footer />
     </div>
    </>,
  },
  {
    path: "/about",
    element: 
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <About />
        <Footer />
     </div>
    </>,
  },
  {
    path: "/explore",
    element: 
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Explore />
        <Footer />
     </div>
    </>,
    }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
