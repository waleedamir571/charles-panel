import React from "react";
import SignUpForm from "../../components/SignUpForm";
import AuthBanner from "../../components/AuthBanner";

const SignUpPage = () => {
  return (
    <>
      <div className="container-fluid w-100 mx-auto mt-0">
        <div className="row d-flex justify-content-center align-items-center mt-0">
          <SignUpForm />
          <AuthBanner
            title={"Logistics solutions can streamline operations"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia mi at lacus placerat, ac vulputate purus scelerisque."
            }
            image={"/images/sign-up-banner.svg"}
          />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
