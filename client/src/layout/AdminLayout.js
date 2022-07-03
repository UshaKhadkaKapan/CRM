import React from "react";
import { Sildemenu } from "../component/offCanvas/SideMenu";
import Footer from "./Footer";
import Header from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />
      <Sildemenu />
      {/* mainbody */}
      <div className="main container">{children}</div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default AdminLayout;
