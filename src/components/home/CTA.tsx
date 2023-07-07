import Button from "../ui/Button";

const Section = (): JSX.Element => {
  return (
    <div className="w-full min-h-[606px] relative bg-blue-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/__experimental/assets/unsplash_2JIvboGLeho.png')" }}
      ></div>
      <div className="absolute inset-0 bg-blue-950 opacity-90"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 gap-10">
        <div className="text-center text-white md:text-[36px] text-[16px] satoshi-medium max-w-[863px]">
          Embark on a transformative educational journey. Gain access to Computer Science resources and enjoy learning
          on the go, and get prepared to shape a brighter future in the world of computer science.
        </div>
        <Button className="px-6 py-3 rounded border border-white text-white text-base md:text-lg satoshi-medium hover:bg-white hover:text-blue-950" />
      </div>
    </div>
  );
};

export default Section;
