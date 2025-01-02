import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";

const Register = () => {
  const { handleCreateAccount } = useContext(AuthContext);

  const handleRegisterAccount = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    handleCreateAccount();
    console.log(name, email, password);
    e.target.reset();
  };
  return (
    <div className="container mx-auto">
      <div className="p-8 rounded-3xl mt-10">
        <h1 className="text-center py-8 text-3xl font-bold text-[#1B2247]">
          Register Account
        </h1>
        <div className="text-center w-2/5 mx-auto">
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
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
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
