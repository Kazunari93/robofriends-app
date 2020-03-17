import React from "react";

export const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3  bg-washed-red "
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
