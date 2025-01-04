import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Shared/useAuth/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { handleLogInAccount, user } = useAuth();
  const [showpass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Log in function
  const handleLogIn = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    // log in function call
    handleLogInAccount(email, password)
      .then((result) => {
        console.log(result);
        // navigate route
        navigate(location?.state ? location?.state : "/");
        if (result) {
          Swal.fire({
            title: "Log In Successfully",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => console.log(error.code, error.message));

    console.log(email, password);
    e.target.reset();
  };
  return (
    <div className="container mx-auto">
      <div className="p-8 rounded-3xl mt-10">
        <div className="text-center w-2/5 mx-auto shadow-2xl bg-white p-10 rounded-2xl">
          <h1 className="text-center py-8 text-3xl font-bold text-[#1B2247]">
            Log In
          </h1>
          <form onSubmit={handleLogIn}>
            <div className="grid grid-cols-1 gap-10 mb-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
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
                Log In
              </button>
            </div>
          </form>
          <div className="divider">
            No Account ? Go to
            <Link className="underline text-primary" to={"/register_account"}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
