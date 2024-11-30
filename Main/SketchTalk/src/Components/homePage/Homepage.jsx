import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header/>
    <Body/>
    <Footer/>
     
    </div>
  );
}
