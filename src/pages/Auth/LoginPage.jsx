import React from "react";
import LoginForm from "../../components/LoginForm";
import AuthBanner from "../../components/AuthBanner";

const LoginPage = () => {
  return (
    <>
      <div className="container-fluid w-100 mx-auto mt-0">
        <div className="row d-flex justify-content-center align-items-center mt-0">
          <LoginForm />
          <AuthBanner
            title={"Logistics solutions can streamline operations"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia mi at lacus placerat, ac vulputate purus scelerisque."
            }
            image={"/images/login-image.png"}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
