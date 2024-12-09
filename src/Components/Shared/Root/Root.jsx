import { Outlet } from "react-router";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <h1 className="bg-lime-300 text-2xl font-extrabold text-center text-[#656DFE] py-5">
        User Blood Groupe and Contact Data Collection Booth
      </h1>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
