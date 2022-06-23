import React from "react";
import Header from "./Header";

// children is the 'children props' of Layout componenet
export default function Layout({ children }) {
  return (
    <div className="w-screen font-roboto">
      <div className="bg-gray-50 w-full flex justify-center items-center">
        <Header />
      </div>
      {children}
    </div>
  );
}
