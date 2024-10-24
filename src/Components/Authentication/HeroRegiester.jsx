import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../../Firebase/Firebase.init";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeroRegister = () => {
  const [issue, setIssue] = useState("");
  const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const auth = getAuth(app);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.Terms.checked;

    console.log(terms);

    setIssue("");
    setSuccess("");

    if (password.length < 6) {
      setIssue("Password less then 6");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setIssue("password must be Capital letter");
      return;
    } else if (!terms) {
      setIssue("Accept our Terms and Conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password, terms)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setSuccess("User Create Successfully!");
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          // Profile updated!
          toast('Profile updated!')
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        sendEmailVerification(res.user)
          .then(() => toast("Please check your email and verify your account"))
          .catch(() => {});
         
      })

      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setIssue(error.message);
      });
  };
  return (
    <div className="">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <h2 className="text-2xl text-center shadow-sm font-semibold p-2">
                Register Form
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full "
                  />
                  <span
                    className="p-1 absolute top-3 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                  </span>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="Terms"
                  className="text"
                  id="Terms"
                />
                <label className="p-2" htmlFor="Terms">
                  Accept our Terms and Conditions{" "}
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
            </form>
            <div>
              {issue && <p className="text-red-600">{issue}</p>}
              {success && <p className="text-green-600">{success}</p>}
              <p className="p-2 mb-4">
                Already have an Account{" "}
                <Link to="/SignIn" className="text-blue-600 border-b-2 border ">
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default HeroRegister;
