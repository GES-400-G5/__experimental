import { Dispatch, SetStateAction } from "react";

const DropdownMenu = ({ close }: { close: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className="w-[263px] h-[394px] relative bg-white">
      <div className="p-2.5 left-[200px] top-[24px] absolute justify-start items-center gap-2.5 inline-flex">
        <button className="w-[16px] h-4 relative" onClick={() => close(false)}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
          </svg>
        </button>
      </div>
      <div className="left-[63px] top-[83px] absolute flex-col justify-center items-center gap-6 inline-flex">
        <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
          <a href="/__experimental/" className="text-sky-500 text-[18px] satoshi-medium">
            Home
          </a>
        </div>
        <div className="w-[117px] h-[0px] border border-neutral-600 border-opacity-20"></div>
        <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
          <a href="/__experimental/about" className="text-neutral-600 text-[18px] satoshi-medium">
            About
          </a>
        </div>
        <div className="w-[117px] h-[0px] border border-neutral-600 border-opacity-20"></div>
        <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
          <a href="/__experimental/team" className="text-neutral-600 text-[18px] satoshi-medium">
            Meet the team
          </a>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
