import React, { Dispatch, SetStateAction } from "react";

type SearchProps = {
  keyword: string;
  setKeyWord: Dispatch<SetStateAction<string>>;
};

const Search = (props: SearchProps) => {
  const { keyword, setKeyWord } = props;
  return (
    <div>
      <div className="p-2 w-3/5 border-2 mx-auto my-8 rounded-md ">
        <input
          type="text"
          placeholder="Search"
          className="outline-none"
          value={keyword}
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
