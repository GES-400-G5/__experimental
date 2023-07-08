import { Dispatch, SetStateAction } from "react";

interface ICard {
  type: "large" | "thin";
  text: string;
  leaf: boolean;
  link?: string | Dispatch<SetStateAction<"semesters" | "levels" | "courses" | "resources" | undefined>>;
  next?: "semesters" | "levels" | "courses" | "resources";
}

const Card = ({ type, text, leaf, link, next }: ICard) => {
  const changeState = () => {
    if (link && typeof link !== "string") link(next);
  };
  return (
    <div>
      {type == "large" ? (
        leaf ? (
          <a
            href={link as string}
            className="w-full max-w-[536px] md:max-h-[299px] max-h-[200px] px-[15px] py-5 bg-sky-400 bg-opacity-5 rounded-2xl border border-neutral-600 hover:border-sky-400 flex-col justify-start items-start gap-[10px] md:gap-[70px] inline-flex"
          >
            <div className="max-w-[100px] max-h-[100px] relative rounded-2xl">
              <img src="/icons/icons8-files 1.svg" />
            </div>
            <div className="self-stretch h-[52px] px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="text-neutral-600 text-[24px] satoshi-medium">{text}</div>
            </div>
          </a>
        ) : (
          <label
            onClick={changeState}
            className="w-full max-w-[536px] md:max-h-[299px] max-h-[200px] px-[15px] py-5 bg-sky-400 bg-opacity-5 rounded-2xl border border-neutral-600 hover:border-sky-400 flex-col justify-start items-start gap-[10px] md:gap-[70px] inline-flex"
          >
            <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] relative rounded-2xl">
              <img src="/icons/icons8-files 1.svg" />
            </div>
            <div className="self-stretch h-[52px] px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="text-neutral-600 text-[24px] satoshi-medium">{text}</div>
            </div>
          </label>
        )
      ) : (
        <label
          onClick={changeState}
          className="w-full max-w-[1092px] max-h-[100px] justify-start items-center gap-5 inline-flex"
        >
          <div className="w-full max-w-[1092px] self-stretch md:px-[15px] pl-0 py-5 px-2 bg-sky-400 bg-opacity-5 rounded-2xl border border-neutral-600 hover:border-sky-400 justify-start items-center gap-2.5 flex">
            <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-2xl">
              <img src="/icons/icons8-files 1.svg" />
            </div>
            <div className="grow shrink basis-0 h-[52px] py-2.5 justify-start items-center gap-2.5 flex">
              <div className="text-neutral-600 text-start text-[16px] md:text-[24px] satoshi-medium">{text}</div>
            </div>
          </div>
        </label>
      )}
    </div>
  );
};

export default Card;
