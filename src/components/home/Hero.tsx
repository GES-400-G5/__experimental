import Button from "../ui/Button";

const Hero = (): JSX.Element => {
  return (
    <div className="w-full pt-8 px-8">
      <div className="max-w-[1093px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="w-[356px] h-[351px] mdw-[586px] md:h-[407px] py-2.5 flex-col justify-start items-start gap-6 inline-flex">
          <div className="pr-2.5 justify-start items-center gap-2.5 inline-flex">
            <div className="md:w-[527px] w-[346px] md:text-[64px] self-stretch text-blue-950 text-[42px] font-bold">
              Academic Success at your fingertips
            </div>
          </div>
          <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="w-[356px] md:w-[556px] text-sky-500 text-[18px] md:text-[24px] font-medium">
              Discover Vast Array of Resources for Uniport Computer Science Students.
            </div>
          </div>
          <div className="px-[25px] py-5 bg-blue-950 rounded justify-center items-center gap-2.5 inline-flex">
            <Button className="text-white text-[18px]   font-medium" />
          </div>
        </div>
        <div>
          <div className="relative min-h-[451px] md:min-h-[556px] w-72 md:w-96 md:pt-0">
            <div className="absolute md:w-[78.28px] md:h-[78.28px] w-[61.90px] h-[61.90px]  left-[31px] top-0  bg-sky-500 bg-opacity-10 rounded-full" />
            <div className="absolute w-[275px] h-[275px] md:w-[425.54px] md:h-[425.54px] left-[70.25px] top-[17.12px]  bg-sky-500 bg-opacity-10 rounded-full" />
            <div className=" absolute top-[60.44px] ">
              <img
                className="w-[598.35px] md:w-[756.69px] rounded-full"
                src="/src/assets/study-group-african-people 1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
