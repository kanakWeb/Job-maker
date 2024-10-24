import React, { useRef, useState } from "react";
import app from "../../Firebase/Firebase.init";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const [issue, setIssue] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);

  const auth = getAuth(app);

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.Terms.checked;

    console.log(terms);

    setIssue("");
    setSuccess("");

    if (password.length < 6) {
      setIssue("Password less then 6");
      toast("Password less then 6");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setIssue("password must be Capital letter");
      return;
    } else if (!terms) {
      setIssue("Accept our Terms and Conditions");
      toast("Accept our Terms and Conditions");
      return;
    }

    signInWithEmailAndPassword(auth, email, password, terms)
      .then((res) => {
        const user = res.user;
        console.log(user);

        if (user.emailVerified) {
          toast("SuccessFully Login !");
          setSuccess("SuccessFully Login !");
        } else {
          toast("Verify your email address");
        }
      })

      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setIssue(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      console.log("Please provided any email", email);
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log("Please write a valid email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log("Password reset email sent!", res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <h2 className="text-2xl text-center shadow-sm font-semibold p-2">
                Login Form
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
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
                <label className="label">
                  <a
                    onClick={handleForgetPassword}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
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
                <button className="btn btn-info">SignIn</button>
              </div>
            </form>
            <div>
              {issue && <p className="text-red-600">{issue}</p>}
              {success && <p className="text-green-600">{success}</p>}
              <p className="p-2 mb-4">
                I have no Account...{" "}
                <Link
                  to="/HeroRegister"
                  className="text-blue-600 border-b-2 border "
                >
                  Register
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

export default SignIn;
