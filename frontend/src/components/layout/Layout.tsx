import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>

      <Outlet />
    </main>
  );
};

export default Layout;
