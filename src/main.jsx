import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Components/Shared/Root/Root.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Components/Home/Home.jsx";
import AvailableBlood from "./Components/Pages/AvailableBlood/AvailableBlood.jsx";
import UsersContactData from "./Components/Pages/UsersContactData/UsersContactData.jsx";
import NotFound from "./Components/Pages/NotFound/NotFound.jsx";
import Login from "./Components/Pages/Login/Login.jsx";
import Register from "./Components/Pages/Register/Register.jsx";
import EnterBloodInformation from "./Components/Pages/EnterBloodInformation/EnterBloodInformation.jsx";
import ContactUs from "./Components/Pages/ContactUs/ContactUs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/available_blood"
            element={<AvailableBlood></AvailableBlood>}
          ></Route>
          <Route
            path="/entry_blood_data"
            element={<EnterBloodInformation></EnterBloodInformation>}
          ></Route>
          <Route
            path="/users_contact_data"
            element={<UsersContactData></UsersContactData>}
          ></Route>
          <Route path="/log_in" element={<Login></Login>}></Route>
          <Route
            path="/register_account"
            element={<Register></Register>}
          ></Route>
          <Route path="/contact_us" element={<ContactUs></ContactUs>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
