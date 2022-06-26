import React from "react";
import MainLayout from "../../layout/MainLayout";
import { useSearchParams } from "react-router-dom";

const Emailverification = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("e");
  const verification = searchParams.get("c");
  return (
    <MainLayout>
      <h1>EmailVerfication</h1>
      {email}\\
      {verification}
    </MainLayout>
  );
};

export default Emailverification;
