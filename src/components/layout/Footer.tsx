const Footer = (): JSX.Element => {
  return (
    <footer className="w-full md:h-[367px] h-[654px] px-6 py-24">
      <div className="max-w-[1093px] mx-auto flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0">
          <img className="w-16 h-16 mr-4" src="/__experimental/assets/Uniport logo 1.png" />
          <img className="w-16 h-16" src="/__experimental/assets/NNL 1.png" />
        </div>
        <div className="text-center md:text-left text-neutral-600 text-sm md:text-[18px] md:w-96 font-medium mb-4 md:mb-0">
          Department of Computer Science, University of Port Harcourt, East/West
          Road, PMB 5323 Choba, Rivers State, Nigeria.
        </div>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="/__experimental"
            className="text-neutral-600 text-[18px] font-medium hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="/__experimental/about"
            className=" text-neutral-600 text-[18px] font-medium hover:text-blue-500"
          >
            About
          </a>
          <a
            href="/__experimental/team"
            className=" text-neutral-600 text-[18px] font-medium hover:text-blue-500"
          >
            Meet the team
          </a>
        </div>
      </div>
      <div className="max-w-[1093px] mx-auto mt-8 pt-4 flex flex-col justify-between items-center gap-7">
        <div className="border-t border-gray-300 border w-full mb-2" />
        <div className="mb-2 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <img src="/__experimental/assets/CS Resourcify logo grey.png" />
          </div>
          <div className="text-center text-neutral-600 text-[18px] font-medium">
            Copyright © 2023 (U2018 - Group Computer Science). All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
