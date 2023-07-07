import { useState } from "react";
import DropdownMenu from "../ui/DropdownMenu";
import Button from "../ui/Button";

const TopNav = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full px-8 py-2">
      <div className="max-w-[1093px] mx-auto  flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="w-[137px] h-[21px] md:w-[208.21px] md:h-8"
            src="/__experimental/assets/CS Resourcify logo blue.png"
            alt="Logo"
          />
        </div>
        <div className="items-center space-x-4 hidden lg:flex">
          <a href="/__experimental/" className="text-base md:text-lg font-medium text-blue-950 hover:text-blue-700">
            Home
          </a>
          <a
            href="/__experimental/about/"
            className="text-base md:text-lg font-medium text-gray-600 hover:text-blue-700"
          >
            About
          </a>
          <a href="/__experimental/team" className="text-base md:text-lg font-medium text-gray-600 hover:text-blue-700">
            Meet the team
          </a>
        </div>
        <div className="items-center hidden lg:flex">
          <Button className="w-[200px] h-11 px-5 py-2.5 rounded border border-blue-950 text-blue-950 text-[18px] font-medium hover:bg-blue-950 hover:text-white justify-center items-center gap-2.5 inline-flex" />
        </div>
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} className="inline-flex">
            <div className="text-black text-[12px] font-normal">MENU</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>

          {open && (
            <div className="absolute top-0 right-0">
              <DropdownMenu close={setOpen} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
