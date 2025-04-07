import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="col-lg-6 col-md-12 p-4">
      <h2 className="text-center login-head color-blue">Create Account</h2>
      <p className="text-center mx-auto mt-2 font-16 login-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        mi at lacus placerat.
      </p>

      <form className="mt-4">
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control form-control-sm custom-input"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control form-control form-control-sm custom-input"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="form-control form-control form-control-sm custom-input"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control form-control-sm custom-input"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control form-control form-control-sm custom-input"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control form-control form-control-sm custom-input"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">Your Country</label>
            <select
              name="country"
              className="form-select form-control form-control-sm custom-input"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="india">India</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Your Category</label>
            <select
              name="category"
              className="form-select form-control form-control-sm custom-input"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
        </div>

          <button type="submit" className="d-flex btn btn-lg bg-blue text-white mx-auto text-center w-50 align-items-center justify-content-center he-60 rounded-4"> 
            Register
          </button>
      </form>

      <div className="text-center mt-4">
        <p>
          Already have an account?{" "}
          <Link to="/" className="color-blue text-decoration-none hover-underline"> 
            Sign In Now
          </Link>
        </p>
      </div>

      <div className="text-center text-muted mt-3 pt-5">
        © {new Date().getFullYear()} ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default SignUpForm;
