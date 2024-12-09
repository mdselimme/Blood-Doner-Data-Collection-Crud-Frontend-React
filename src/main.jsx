import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Components/Shared/Root/Root.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Components/Home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/availableblood" element={<Home></Home>}></Route>
          <Route path="/userscontactdata" element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
