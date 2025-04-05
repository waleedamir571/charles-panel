import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="col-lg-6 col-md-12 p-4">
      <h2 className="text-center login-head color-blue">Login Now</h2>
      <p className="text-center mx-auto mt-2 font-16 login-para">
        Today is a new day. It's your day. You shape it. Login in to start
        managing your work.
      </p>

      <form className="d-flex flex-column align-items-center mx-auto mt-5 max-w-350 w-100">
        <div className="mb-3 w-100">
          <label
            htmlFor="email"
            className="form-label text-black font-14 fw-500"
          >
            Email or User Name
          </label>
          <div className="position-relative">
            <input
              type="email"
              id="email"
              className="form-control form-control-sm ps-5 pe-5 bg-light border-1 custom-input w-100"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <span className="position-absolute top-50 start-0 translate-middle-y ps-2-5 pb-1">
              <img src="/images/icons/envelope.svg" alt="Lock" width={25} />
            </span>
          </div>
        </div>

        <div className="mb-3 w-100">
          <label
            htmlFor="password"
            className="form-label text-black font-14 fw-500"
          >
            Password
          </label>
          <div className="position-relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-control form-control-sm ps-5 pe-5 bg-light border-1 custom-input w-100"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
              <img
                src="/images/icons/lock.svg"
                alt="Lock"
                className="img-fluid"
                width={18}
              />
            </span>

            <button
              type="button"
              className="position-absolute top-50 end-0 translate-middle-y border-0 pr-12 bg-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye size={22} color="#969aa8" />
              ) : (
                <EyeOff size={22} color="#969aa8" />
              )}
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center w-100 flex-wrap mb-4">
          <div className="d-flex align-items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              className="form-check-input cursor-pointer"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" className="custom-label fw-500 font-13">
              Keep me Login
            </label>
          </div>
          <a
            href="/forgot-password"
            className="color-blue text-decoration-none hover-underline fw-500 font-13"
          >
            Forgot Password
          </a>
        </div>

        <button
          type="submit"
          className="btn btn-lg form-control form-control-lg ps-5 pe-5 border-1 he-60 bg-blue text-white rounded-4"
        >
          Login
        </button>
      </form>

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
        <img src="/images/icons/apple.png" alt="Apple" className="img-fluid" />
      </div>

      <div className="mt-4 text-center">
        <p className="text-black font-14 fw-500">
          Don't have an account?{" "}
          <Link to="/signup" className="color-blue text-decoration-none hover-underline">
            Create Account
          </Link>
        </p>
      </div>

      <div className="text-center text-muted mt-3 pt-5">
        © {new Date().getFullYear()} ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default LoginForm;
