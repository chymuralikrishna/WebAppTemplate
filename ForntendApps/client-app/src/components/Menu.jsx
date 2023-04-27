import React from "react";
import Menu from "./MenuListu";

const App = ({ userRole }) => {
  return (
    <div>
      <Menu userRole={userRole} />
      <h1>Welcome to my app!</h1>
      {/* rest of your app goes here */}
    </div>
  );
};

export default App;
