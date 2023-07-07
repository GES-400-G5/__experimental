const AboutUs = () => {
  return (
    <div className="w-full md:pt-20 pt-0">
      <div className="max-w-[364px] h-[1600px] md:max-w-[1020px] md:h-[850px] mx-auto flex flex-col items-start space-y-12 justify-evenly">
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-blue-950 text-4xl font-bold">About CS Resourcify</h1>
          <p className="text-gray-600 text-lg font-medium">
            CS Resourcify is a comprehensive resource base exclusive to computer science students from the University of
            Port Harcourt. It was birthed as a project work from the Group 5 of U2018 Computer Science Students for
            their GES 400.1 (Enterprenuership) Studies.
          </p>
          <p className="text-gray-600 text-lg font-medium">
            Our mission is to provide a comprehensive resource centre for computer science students at every level of
            their academic journey. We understand students' challenges in accessing high-quality resources to support
            their studies, and we are committed to making it easier for them to succeed.
          </p>
          <p className="text-gray-600 text-lg font-medium">
            Our website offers vast resources, including past questions, Lecture Notes, and supplementary materials, all
            carefully curated to support your academic pursuits. Whether you’re a freshman just starting out or a senior
            preparing for graduation, CS Resourcify has everything you need to excel.
          </p>
          <p className="text-gray-600 text-lg font-medium">
            Our user-friendly, intuitive website is accessible from any device, so you can study and learn at your own
            pace, whenever and wherever you want. We believe every student deserves the opportunity to succeed and are
            here to help make that happen.
          </p>
          <p className="text-gray-600 text-lg font-medium">
            Built to simplify your academic experiences and enhance your productivity as a student, CS Resourcify – is
            your one-stop-shop for all your computer science academic resources.
          </p>
        </div>
        <button className="w-[200px] h-16 px-[30px] py-5 rounded bg-blue-950 text-white text-[18px] font-medium hover:bg-blue-700 justify-center items-center gap-2.5 inline-flex">
          Meet the team
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
