import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TLayout } from "./types";

const Layout = ({ children }: TLayout) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      {pathname !== "/" && (
        <div className="text-left px-8 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="text-lg font-bold text-white bg-red-700 rounded-md px-8 py-2 fixed top-2 left-8"
          >
            BACK
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;
