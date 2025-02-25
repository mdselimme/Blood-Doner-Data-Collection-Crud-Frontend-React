import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import axios from "axios";
import { FaRegEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import useAuth from "../../Shared/useAuth/useAuth";

const Register = () => {
  const { handleCreateAccount, updateProfile, auth } = useAuth();
  const [showpass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Register account with email and password and update profile name
  const handleRegisterAccount = (e) => {
    e.preventDefault();
    // Find value from input
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;

    // Create Account Function
    handleCreateAccount(email, password)
      // create account
      .then((result) => {
        result.user;
        // navigate the route
        navigate(location?.state ? location?.state : "/");
        const img = "https://i.ibb.co.com/0mYHhWF/dummy-profile.webp";
        // Update profile name
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: img,
        })
          .then(() => {
            // Profile updated!
            // users data object
            const userData = {
              name: auth.currentUser.displayName,
              email: auth.currentUser.email,
              lastLogInTime: auth.currentUser.metadata.lastSignInTime,
            };
            // Axios post method for send to data on serverside
            axios
              .post("http://localhost:5000/users", userData)
              .then((response) => {
                if (response.data.insertedId) {
                  console.log("Data Inserted");
                }
              })
              .catch((error) => {
                console.log(error.code, error.message);
              });
          })
          .catch((error) => {
            console.log(error.code, error.message);
          });
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
    console.log(name, email, password);
    e.target.reset();
  };
  return (
    <div className="container mx-auto">
      <div className="p-8 rounded-3xl mt-10">
        <div className="text-center w-2/5 mx-auto shadow-2xl bg-white p-10 rounded-2xl">
          <h1 className="text-center py-8 text-3xl font-bold text-[#1B2247]">
            Register Account
          </h1>
          <form onSubmit={handleRegisterAccount}>
            <div className="grid grid-cols-1 gap-10 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your fullname"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
              <div className="relative">
                <input
                  type={showpass ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  onClick={() => setShowPass(!showpass)}
                  className="absolute top-3 right-6"
                >
                  {showpass ? (
                    <IoMdEyeOff className="text-2xl" />
                  ) : (
                    <FaRegEye className="text-xl" />
                  )}
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn w-2/4 text-white my-5 btn-primary"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="divider">
            Already Have an Account ? Go to
            <Link className="underline text-primary" to={"/log_in"}>
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
