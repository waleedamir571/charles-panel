import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}\nRemember Me: ${rememberMe}`);
  };

  return (
    <div className="container-fluid w-100 mx-auto">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-6 p-4">
          <h2 className="text-center login-head color-blue">Login Now</h2>
          <p className="text-center w-75 mx-auto mt-2 font-16">
            Today is a new day. It's your day. You shape it. Login in to start
            managing your work.
          </p>

          <form
            onSubmit={handleLogin}
            className="d-flex flex-column align-items-center mx-auto mt-5"
            style={{ maxWidth: "350px", width: "100%" }}
          >
            {/* Email Input */}
            <div className="mb-3 w-100">
              <label
                htmlFor="email"
                className="form-label text-black font-14 fw-500"
              >
                Email or User Name
              </label>
              <div className="position-relative">
                {/* email Input Field */}
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg ps-6 pe-5 bg-light border-1 custom-input w-100"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                {/* Lock Icon (Inside Input - Left Side) */}
                <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                  <img src="/images/icons/envelope.png" alt="Lock" />
                </span>
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-3 w-100">
              <label
                htmlFor="password"
                className="form-label text-black font-14 fw-500"
              >
                Password
              </label>
              <div className="position-relative">
                {/* Password Input Field */}
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="form-control form-control-lg ps-6 pe-5 bg-light border-1 custom-input w-100"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {/* Lock Icon (Inside Input - Left Side) */}
                <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                  <img
                    src="/images/icons/lock-icon.png"
                    alt="Lock"
                    className="img-fluid"
                  />
                </span>

                {/* Eye Icon (Inside Input - Right Side) */}
                <button
                  type="button"
                  className="position-absolute top-50 end-0 translate-middle-y border-0 pr-12 bg-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} color="gray" />
                  ) : (
                    <FaEye size={18} color="gray" />
                  )}
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center w-100 flex-wrap mt-2 mb-4 gap-3">
              {/* Keep Me Login Checkbox */}
              <div className="d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="form-check-input"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="rememberMe"
                  className="mb-0 custom-label fw-500 font-13"
                >
                  Keep me Login
                </label>
              </div>

              {/* Forgot Password Link */}
              <a
                href="/forgot-password"
                className="text-primary text-decoration-none color-blue fw-500 font-13"
              >
                Forgot Password
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary form-control form-control-lg ps-5 pe-5 border-1 he-50 bg-blue rounded-4"
            >
              Login
            </button>
          </form>

          {/* Social Login Buttons */}
          <div className="d-flex align-items-center my-4 gap-4">
            <div className="flex-grow-1 border-top"></div>
            <span className="mx-3 text-muted fw-semibold">
              You can Connect with
            </span>
            <div className="flex-grow-1 border-top"></div>
          </div>

          <div className="d-flex justify-content-center gap-4 pt-3">
            <img
              src="/images/icons/facebook.png"
              alt="Facebook"
              className="img-fluid"
            />
            <img
              src="/images/icons/google.png"
              alt="Google"
              className="img-fluid"
            />
            <img
              src="/images/icons/apple.png"
              alt="Apple"
              className="img-fluid"
            />
          </div>

          {/* Register Link */}
          <div className="mt-4 text-center">
            <p className="text-black font-14 fw-500">
              Don't have an account?{" "}
              <a href="#" className="color-blue text-decoration-none">
                Create Account
              </a>
            </p>
          </div>

          {/* Footer */}
          <div className="text-center text-muted mt-3 pt-2">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
        </div>
        <div className="col-md-6 position-relative p-4 bg-none">
          <img
            src="/images/login-image.png"
            alt="Knotty Logistics Background"
            className="img-fluid w-100 responsive-bg bg-none"
          />

          {/* Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-5">
            {/* Logo */}
            <div className="text-center">
              <img
                src="/images/icons/logistic-logo.png"
                alt="Knotty Logistics"
                className="img-fluid "
              />
            </div>

            {/* Text Overlay */}
            <div className="text-center mb-5 px-3">
              <h3 className="fw-bold mb-3 fs-10 lh-10 ls-md text-white">
                Logistics solutions can streamline operations
              </h3>
              <p className="text-light font-16 w-75 mx-auto ls-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia mi at lacus placerat, ac vulputate purus scelerisque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
