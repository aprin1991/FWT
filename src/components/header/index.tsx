import React, { FC } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search";
import mainLogo from "./../../assets/images/logo.png";
import heroHeader from "./../../assets/images/header.png";
import { THeaderProps } from "./types";

const Header: FC<THeaderProps> = ({ onSearch }) => {
  return (
    <div>
      <img
        src={heroHeader}
        className="w-full h-48 md:h-96 object-cover opacity-70"
        alt="hero header"
      />
      <header className="w-full flex justify-between items-center gap-8 p-4 md:px-16 bg-slate-900">
        <Link to="/">
          <img src={mainLogo} className="w-16 md:w-24 h-auto" alt="logo" />
        </Link>
        <SearchBar onSearch={onSearch} />
      </header>
    </div>
  );
};

export default Header;
