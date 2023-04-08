import "./login.css";
import "../index.css";
import logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";
import NavBars from "../Sections/navbar";
import { useState } from "react";
import { ToastContainer } from "react-bootstrap";

const Register = () => {
    const [form, setForm] = useState({ patientID: "", password: "" });
  

    const onChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
   
    const handleClick = (e) => {
   
      console.log(setForm);
    
    };
  
  return (
    <>
    <ToastContainer />
    <NavBars />
    <div className="section-area account-wraper2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="appointment-form form-wraper">
              <div className="logo">
                <img src={logo} alt="img" />
              </div>
              <form action="#">
              <div className="form-group">
                  <h6>User Name</h6>
                  <input
                    name="username"
                    value={form.username}
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={onChange}
                  ></input>
                </div>
                <div className="form-group">
                  <h6>Email</h6>
                  <input
                    name="patientID"
                    value={form.patientID}
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={onChange}
                  ></input>
                </div>
                <div className="form-group">
                  <h6>Password</h6>
                  <input
                    name="password"
                    value={form.password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={onChange}
                  ></input>
                </div>
                <div className="form-group" onClick={handleClick}>
                  <Link
                    type="botton"
                    className="btn mb-30 btn-lg btn-primary w-100"
                  >
                    Register
                  </Link>
                 
                </div>
              </form>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Register