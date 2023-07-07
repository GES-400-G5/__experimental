const team = [
  {
    name: "Peter Anyaogu",
    image: "/assets/team/Peter Anyaogu.jpg",
  },
  {
    name: "Ogbebor Doreen Unoma",
    image: "/assets/team/Ogbebor Doreen Unoma.png",
  },
  {
    name: "Edirin Alison Eyuren",
    image: "/assets/team/Edirin Alison Eyuren.jpg",
  },
  {
    name: "Okafor Lucy Chidiogo",
    image: "/assets/team/Okafor Lucy chidiogo.jpg",
  },
  {
    name: "Ibhaze Emmanuel Osamudiamen",
    image: "/assets/team/Ibhaze Emmanuel Osamudiamen.jpg",
  },
  {
    name: "Simon Rukevwe",
    image: "https://via.placeholder.com/185x217",
  },
  {
    name: "Egbewole Ayotunde",
    image: "/assets/team/Egbewole Ayotunde.jpg",
  },
  {
    name: "Mela Winning",
    image: "/assets/team/Mela Winning.jpg",
  },
  {
    name: "Ewokor Thankgod Eso",
    image: "/assets/team/Ewokor Thankgod Eso.jpg",
  },
  {
    name: "Godwin Alexander Ekainu",
    image: "/assets/team/Godwin Alexander Ekainu.jpg",
  },
  {
    name: "Nosa-Omoruyi Michael",
    image: "/assets/team/Nosa-Omoruyi Michael.jpg",
  },
  {
    name: "Soprinye Geoffrey Blue-Jack",
    image: "/assets/team/Soprinye Geoffrey Blue-Jack.jpg",
  },
  {
    name: "Ted-Umukoro Precious Oghenerioborie",
    image: "/assets/team/Ted-Umukoro Precious Oghenerioborie.jpg",
  },
  {
    name: "Daemi T. Jack",
    image: "/assets/team/Daemi T. Jack.jpeg",
  },
  {
    name: "",
    image: "https://via.placeholder.com/185x217",
  },
];

const TeamG5 = () => {
  return (
    <div className="w-full py-16 pr-4 pl-2">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[364px] h-[130px] md:w-[1020px] md:h-[200px] flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-[363px] md:self-stretch justify-start items-center gap-2.5 inline-flex">
            <a
              href="/__experimental/team"
              className="grow shrink basis-0 text-blue-950 text-[28px] md:text-[46px] font-bold"
            >
              Meet the team
            </a>
          </div>
          <div className="w-[363px] md:w-full justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-neutral-600 text-[16px] md:text-[24px]  font-medium">
              Behold the brains behind this amazing idea - U2018 CSC (Group 5)
              members
            </div>
          </div>
        </div>

        <div className="w-full py-8">
          <div className="w-[364px] md:w-[1020px] mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[0].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[0].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[1].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[1].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[2].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[2].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[3].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[3].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[4].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[4].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[5].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[5].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[6].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[6].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[7].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[7].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[8].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[8].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[9].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[9].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[10].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[10].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[11].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[11].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[12].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[12].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[13].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[13].name}
              </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-36 h-36 rounded-lg filter brightness-75 contrast-125 grayscale"
                src={team[14].image}
                alt="Person"
              />
              <h2 className="text-blue-950 text-[11px] md:text-[18px] font-bold text-center">
                {team[14].name}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamG5;
