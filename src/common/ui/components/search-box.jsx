import clsx from "clsx";
import React, { useRef, useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus(); 
    } else {
      inputRef.current.blur(); 
    }
  }, [isFocused]);
  return (
    <div
      className={clsx(
        "flex bg-gray30 text-gray20 rounded-full px-3 hover:bg-gray25 transition-all duration-500   ring-white md:w-[500px] py-2 w-full",
        isFocused ? "ring-2" : "ring-0"
      )}
    >
      <div className="flex items-center rounded-l-full">
        <AiOutlineSearch
          className="text-3xl md:text-4xl"
          onClick={() => setIsFocused(true)}
        />
      </div>
      <input
        ref={inputRef}
        className="ml-2 outline-none text-white placeholder:text-gray20 w-full"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="flex items-center">
        <AiOutlineClose
          className="text-3xl md:text-4xl cursor-pointer hover:text-white transition-all duration-200"
          onClick={() => {setSearch(""), setIsFocused(true)}}
        />
      </div>
    </div>
  );
}
