import React from "react";

const Menu = ({ userRole }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {userRole === "admin" && (
          <li>
            <a href="/admin">Admin Panel</a>
          </li>
        )}
        {userRole === "customer" && (
          <li>
            <a href="/orders">My Orders</a>
          </li>
        )}
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
