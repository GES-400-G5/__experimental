const Features = (): JSX.Element => {
  return (
    <div className="w-full px-8 pb-8">
      <div className="max-w-[1093px] md:h-[650px] h-[1000px] justify-center m-auto flex flex-col items-start space-y-16">
        <div className="text-blue-950 text-[24px] md:text-[36px] font-bold mb-8">
          Whatever level you are at,
          <br />
          We are here to help
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex justify-center items-center mb-4">
              <img
                className="w-12 h-12"
                src="/assets/icons8-online-library-96 1.png"
              />
            </div>
            <div className="text-lg font-bold mb-2">
              Comprehensive Resources
            </div>
            <div className="md:text-[18px] text-[16px] md:text-base text-gray-600">
              CS Resourcify provides a comprehensive platform where students can
              access a wide range of resources for their studies.
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex justify-center items-center mb-4">
              <img
                className="w-12 h-12"
                src="/assets/icons8-diploma-96 1.png"
              />
            </div>
            <div className="text-lg font-bold mb-2">Academic Excellence</div>
            <div className="md:text-[18px] text-[16px] md:text-base text-gray-600">
              CS Resourcify is committed to helping students gain better
              understanding in their studies by curating quality resources.
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex justify-center items-center mb-4">
              <img
                className="w-12 h-12"
                src="/assets/icons8-relaxed-96 1.png"
              />
            </div>
            <div className="text-lg font-bold mb-2">Accessible</div>
            <div className="md:text-[18px] text-[16px] md:text-base text-gray-600">
              CS Resourcify provides easy to access study resources and help you
              study on the go, whenever you want and where ever you are.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
