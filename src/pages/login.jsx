import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import logo from "../assets/img/logo/logo-bfc.png";
const Login = () => {
return (
<>
<style>
  {`
  body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: #e2e8f0;
  }
  p {
  font-size: 14px;
  color: #6b7280;
  }
  .signup-form {
  width: 480px;
  padding: 32px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 4px 8px #6b728040;
  text-align: center;
  }
  .header {
  margin-bottom: 48px;
  }
  .header h1 {
  font-weight: bolder;
  font-size: 28px;
  color: #6366f1;
  }
  .input {
  position: relative;
  margin-bottom: 24px;
  }
  .input input {
  width: 100%;
  border: none;
  padding: 8px 40px;
  border-radius: 4px;
  background-color: #f3f4f6;
  color: #1f2937;
  font-size: 16px;
  }
  .input input::placeholder {
  color: #6b7280;
  }
  .input i {
  top: 50%;
  width: 36px;
  position: absolute;
  transform: translateY(-50%);
  color: #6b7280;
  font-size: 16px;
  }
  .signup-btn {
  width: 100%;
  display: block;
  color: #fff;
  border-radius: 4px ;
  font-weight: 600;
  }
  .signup-btn:active {
  background-color: #4f46e5;
  transition: all 0.3s ease;
  }
  a {
  color: #6366f1;
  text-decoration: none;
  }
  .logo {
  width: 100%;
  }
  `}
</style>
<div className="signup-form">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <Link
          to="/"
          className="logo d-flex align-items-center text-decoration-none justify-content-center mb-5"
          >
        <div className="logo-pt">
          <img src={logo} alt="" />
        </div>
        <span className="d-none d-lg-block">WMS</span>
        </Link>
      </div>
    </div>
    <form>
      <div className="input">
        <i>
          <FaUser />
        </i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input">
        <i>
          <FaEnvelope />
        </i>
        <input type="email" placeholder="Email" />
      </div>
      <div className="input">
        <i>
          <FaLock />
        </i>
        <input type="password" placeholder="Password" />
      </div>
      <div className="col-12">
        <Link to="/" className="signup-btn bg-gradient-primary py-2">
        LOG IN
        </Link>
      </div>
    </form>
  </div>
</div>
</>
);
};
export default Login;