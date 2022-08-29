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
        className="w-full h-96 object-cover opacity-70 hero-header"
        alt="hero header"
      />
      <header className="w-full flex justify-between items-center p-4 px-16 bg-slate-900">
        <Link to="/">
          <img src={mainLogo} className="w-24" alt="logo" />
        </Link>
        <SearchBar onSearch={onSearch} />
      </header>
    </div>
  );
};

export default Header;
