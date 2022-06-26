import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { useSearchParams } from "react-router-dom";
import { emailVerificationAdminUser } from "../../helper/axios-helper";
import { Alert, Spinner } from "react-bootstrap";

const Emailverification = () => {
  const [isLoading, setIsLoading] = useState({});
  const [response, setResponse] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const email = searchParams.get("e");

    const verificationCode = searchParams.get("c");
    submitVerification({ email, verificationCode });
  }, []);

  const submitVerification = async (obj) => {
    setIsLoading(true);
    const result = await emailVerificationAdminUser(obj);
    setIsLoading(false);
    setResponse(result);
  };

  return (
    <MainLayout>
      <div className="verification mt-5 pt-5">
        <div className="message">
          <h1>Email Verification</h1>
          {response?.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {""}
              {response?.message}
            </Alert>
          )}

          {isLoading && <Spinner variant="primary" animation="border" />}
        </div>
      </div>
    </MainLayout>
  );
};

export default Emailverification;
