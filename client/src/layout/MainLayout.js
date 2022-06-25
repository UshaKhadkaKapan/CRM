import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* mainbody */}
      <div className="main container">{children}</div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
