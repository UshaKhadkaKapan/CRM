import React from "react";
import RegisterationForm from "../../component/registration/RegisrationForm";
import MainLayout from "../../layout/MainLayout";

const Registeration = () => {
  return (
    <MainLayout>
      <div className="reg-form d-flex justify-content-center">
        <RegisterationForm />
      </div>
    </MainLayout>
  );
};

export default Registeration;
