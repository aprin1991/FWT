import React, { FC, useState } from "react";
import { Magnify } from "src/icons";
import { THeaderProps } from "../header/types";

const SearchBar: FC<THeaderProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search);
  };
  return (
    <div className="w-72">
      <form onSubmit={handleSubmit} className="relative">
        <input
          className="no-border p-1 rounded-sm w-full  px-4 bg-gray-700 text-white"
          type="search"
          placeholder="search ..."
          value={search}
          onChange={handleSearch}
          araia-label="search box"
        />
        <button className="absolute right-2 top-1.5" type="submit">
          {Magnify}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
