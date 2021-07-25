import { useState } from "react";

interface ISearchFood {
  searchText: (text: string) => void;
}
const Header = ({ searchText }: ISearchFood) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    searchText(text);
    setText('')
  };
  return (
    <div className="h-header bg-red-50 bg-cover bg-no-repeat bg-center bg-hero-pattern border-b border-solid border-gray-100">
      <div className="align-middle pt-24">
        <h2 className="hidden md:flex lg:flex justify-center align-middle text-gray-900 text-5xl font-bold py-6">
          Best Food waiting for your belly
        </h2>
        <p className="hidden md:flex lg:flex justify-center text-gray-500 font-normal text-lg py-3">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center py-3 my-5">
          <input
            onChange={(e) => setText(e.target.value)}
            className="rounded-sm bg-white shadow-2xl py-3 px-12 w-2/4 border border-transparent focus:outline-none font-normal text-gray-900"
            placeholder="Search for your product"
          />
          <button className="bg-red-500 focus:outline-none text-white font-medium px-5 rounded">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
