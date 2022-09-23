import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Layout;
