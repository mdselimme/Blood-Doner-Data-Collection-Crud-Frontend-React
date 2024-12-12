import { Link, NavLink } from "react-router";

const Header = () => {
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
                <NavLink
                  className="text-[0.7rem] mb-5 md:mb-0 md:text-base font-normal px-5 text-[#001001]"
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-[0.7rem] mb-5 md:mb-0 md:text-base font-normal px-5 text-[#001001]"
                  to={"/entry_blood_data"}
                >
                  Enter blood Information
                </NavLink>
                <NavLink
                  className="text-[0.7rem] mb-5 md:mb-0 md:text-base font-normal px-5 text-[#001001]"
                  to={"/available_blood"}
                >
                  Available Blood
                </NavLink>
                <NavLink
                  className="text-[0.7rem] mb-5 md:mb-0 md:text-base font-normal px-5 text-[#001001]"
                  to={"/users_contact_data"}
                >
                  Users Contact Data
                </NavLink>
                <NavLink
                  className="text-[0.7rem] md:text-base font-normal px-5 text-[#001001]"
                  to={"/contact_us"}
                >
                  Contact Us
                </NavLink>
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
              <NavLink
                className="text-base font-normal px-5 text-[#001001]"
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className="text-base font-normal px-5 text-[#001001]"
                to={"/entry_blood_data"}
              >
                Enter blood Information
              </NavLink>
              <NavLink
                className="text-base font-normal px-5 text-[#001001]"
                to={"/available_blood"}
              >
                Available Blood
              </NavLink>
              <NavLink
                className="text-base font-normal px-5 text-[#001001]"
                to={"/users_contact_data"}
              >
                Users Contact Data
              </NavLink>
              <NavLink
                className="text-base font-normal px-5 text-[#001001]"
                to={"/contact_us"}
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to={"/log_in"}
              className="bg-primary text-white px-5 text-[0.7rem] rounded md:text-base py-2 md:py-3 md:px-8"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
