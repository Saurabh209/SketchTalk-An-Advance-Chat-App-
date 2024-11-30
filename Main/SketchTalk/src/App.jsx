import React from "react";
import LoginSignup from "./Components/loginSignup/LoginSignup.jsx";
import Header from "./Components/homePage/header/Header.jsx";
import Footer from "./Components/homePage/footer/Footer.jsx";
import Body from "./Components/homePage/body/Body.jsx";
import Page_0 from "./Components/page_0/Page_0.jsx";

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
    path: "/page_0",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Page_0 />
        <Footer />
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
