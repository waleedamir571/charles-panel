import React from "react";

const AuthBanner = ({ title, description, image }) => {
  return (
    <div className="col-lg-6 col-md-12 position-relative bg-none p-0">
      <img
        src={image}
        alt="Knotty Logistics Background"
        className="img-fluid w-100 responsive-bg bg-none "
      />

      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column p-5 justify-responsive">
        <div className="text-center">
          <img src="/images/icons/logistic-logo.png" alt="Knotty Logistics" className="img-fluid" width={200} height={200} />
        </div>

        <div className="text-center mb-5 py-3 pad-4 w-100">
          <h3 className="fw-bold mb-3 fs-10 lh-10 ls-md text-white ">{title}</h3>
          <p className="text-light font-16 w-75 mx-auto ls-md">{description}</p>
        </div>  
      </div>
    </div>
  );
};

export default AuthBanner;
