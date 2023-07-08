import { Dispatch, SetStateAction } from "react";
import { Folders } from "../../pages/app";

const Breadcrumb = ({
  deeplink,
  index,
  callback,
}: {
  deeplink: string;
  index: number;
  callback: Dispatch<SetStateAction<"semesters" | "levels" | "courses" | "resources" | undefined>>;
}) => {
  const folders = ["semesters", "levels", "courses", "resources"];
  const normalize = (text: string): string => {
    return text.replace(/\s+/g, " ");
  };
  return (
    <div className="text-sm breadcrumbs w-full mb-10 bg-zinc-100 px-5 gap-6 md:text-[24px] md:h-16 justify-start items-center inline-flex satoshi-medium">
      <ul>
        {normalize(deeplink)
          .split(" ")
          .map((item, idx) => {
            return (
              <li key={idx} className={`${idx == index ? "text-sky-500" : "text-neutral-600"}`}>
                <button className="link" onClick={() => callback(folders[index] as Folders)}>
                  {item}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
