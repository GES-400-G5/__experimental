const About = () => {
  return (
    <div>
      <div className="w-[1010px] h-[924px] flex-col justify-start items-start gap-20 inline-flex">
        <div className="h-[780px] flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-blue-950 text-[46px] font-bold leading-10">
              About CS Resourcify
            </div>
          </div>
          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-neutral-600 text-[24px] font-medium">
              CS Resourcify is a comprehensive resource base exclusive to computer science students from the University
              of Port Harcourt. <br />
              It was birthed as a project work from the Group 5 of U2018 Computer Science Students for their GES 400.1
              (Enterprenuership) Studies
              <br />
              Our mission is to provide a comprehensive resource centre for computer science students at every level of
              their academic journey.
              <br />
              We understand students' challenges in accessing high-quality resources to support their studies, and we
              are committed to making it easier for them to succeed.
              <br />
              Our website offers vast resources, including past questions, Lecture Notes, and supplementary materials,
              all carefully curated to support your academic pursuits. Whether you’re a freshman just starting out or a
              senior preparing for graduation, CS Resourcify has everything you need to excel.
              <br />
              Our user-friendly, intuitive website is accessible from any device, so you can study and learn at your own
              pace, whenever and wherever you want. We believe every student deserves the opportunity to succeed and are
              here to help make that happen.
              <br />
              Built to simplify your academic experiences and enhance your productivity as a student, CS Resourcify – is
              your one-stop-shop for all your computer science academic resources.
            </div>
          </div>
        </div>
        <div className="px-[30px] py-5 bg-blue-950 rounded justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-[18px] font-medium">Meet the team</div>
        </div>
      </div>
    </div>
  );
};

export default About;
