import { Link, useNavigate } from "react-router";
import NavMenu from "../NavMenu/NavMenu";
import useAuth from "../useAuth/useAuth";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";

const Header = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  // log Out User function
  const logOutUser = () => {
    signOutUser()
      .then((result) => {
        result;
        navigate("/");
      })
      .catch((error) => console.log(error.code, error.message));
  };

  return (
    <div className="bg-orange-50">
      <div className="container mx-auto py-2 md:py-4">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow"
              >
                <NavMenu></NavMenu>
              </ul>
            </div>
            <Link
              to={"/"}
              className="text-xl md:text-3xl text-[#001001] font-extrabold"
            >
              Blood
              <span className="text-primary">Campaign</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavMenu></NavMenu>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center">
                <div className="tooltip" data-tip={user?.displayName}>
                  <div className="avatar">
                    <div className="ring-primary mr-3 ring-offset-base-100 w-10 rounded-full ring ring-offset-1">
                      <img
                        className="image-full"
                        src={user?.photoURL}
                        alt="profile-image"
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="bg-primary hover:bg-white hover:text-black text-white font-medium border-2 border-primary px-5 flex items-center text-[0.7rem] rounded-full md:text-base py-2 md:py-2 md:px-6"
                  onClick={logOutUser}
                >
                  <span className="mr-2 capitalize"> log out </span>{" "}
                  <IoLogOutOutline />
                </button>
              </div>
            ) : (
              <Link
                to={"/log_in"}
                className="bg-primary hover:bg-white hover:text-black text-white font-medium border-2 border-primary px-5 flex items-center text-[0.7rem] rounded-full md:text-base py-2 md:py-2 md:px-6"
              >
                <span className="mr-2 capitalize">Log In</span> <IoMdLogIn />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
