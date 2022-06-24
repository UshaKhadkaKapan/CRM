import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLaayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* mainbody */}
      <div className="main">{children}</div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLaayout;
