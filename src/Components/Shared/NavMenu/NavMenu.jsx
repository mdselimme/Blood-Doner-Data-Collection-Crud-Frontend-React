import { NavLink } from "react-router";

const NavMenu = () => {
  return (
    <>
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
        Donors Contact Data
      </NavLink>
      <NavLink
        className="text-[0.7rem] md:text-base font-normal px-5 text-[#001001]"
        to={"/contact_us"}
      >
        Contact Us
      </NavLink>
    </>
  );
};

export default NavMenu;
