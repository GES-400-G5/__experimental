import { useState } from "react";
import Main from "../../components/layout/wrappers/Main";
import Card from "../../components/ui/Card";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { data } from "./data";

interface IDisplayText {
  semesters: { active: string; main: string; body: string };
  levels: { active: string; main: string; body: string };
  courses: { active: string; main: string; body: string };
  resources: { active: string; main: string; body: string };
}

export type Folders = "semesters" | "levels" | "courses" | "resources" | undefined;

const AppPage = () => {
  const [folder, setFolder] = useState<Folders>("semesters");
  const [semester, setSemester] = useState<string>();
  const [level, setLevel] = useState<number>();
  const [course, setCourse] = useState<string>();
  const [displayText, setDisplayText] = useState<IDisplayText>({
    semesters: {
      active: "",
      main: "Welcome",
      body: "Select the current semester to view resources",
    },
    levels: {
      active: "",
      main: "What level are you?",
      body: "Kindly select your respective level to view what we have for you.",
    },
    courses: { active: "", main: "", body: "Select a course from the list." },
    resources: { active: "", main: "GES100.1", body: "Goodluck to you. Select from the options below" },
  });

  const handleSetDisplayText = (text: string, folder: Folders, additionalTxt?: string) => {
    const newDisplayText = displayText;
    newDisplayText[folder!].active = text;
    if (additionalTxt) newDisplayText[folder!].main = additionalTxt;
    setDisplayText(newDisplayText);
  };

  return (
    <Main>
      <div className="w-full py-16 px-8">
        <div className="flex justify-center flex-col w-full py-16 max-w-[1093px] mx-auto">
          <div className="md:w-[1020px] w-full h-[124px] flex-col justify-start items-start gap-5 inline-flex mb-20">
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-blue-950 text-[46px] satoshi-bold leading-10">
                {folder && displayText[folder].main}
              </div>
            </div>
            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-neutral-600 text-[24px] satoshi-medium">
                {folder && displayText[folder].body}
              </div>
            </div>
          </div>

          {folder !== "semesters" && (
            <Breadcrumb
              deeplink={`${folder && displayText.semesters.active} ${folder && displayText.levels.active}
               ${folder && displayText.courses.active} ${folder && displayText.resources.active}`}
              index={0}
              callback={setFolder}
            />
          )}

          {folder == "semesters" && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 satoshi-medium">
              <button
                onClick={() => {
                  handleSetDisplayText("Semester", "semesters");
                  setSemester("semester1");
                }}
              >
                <Card type="large" text="1st Semester" leaf={false} link={setFolder} next="levels" />
              </button>
              <button
                onClick={() => {
                  handleSetDisplayText("Semester", "semesters");
                  setSemester("semester2");
                }}
              >
                <Card type="large" text="2nd Semester" leaf={false} link={setFolder} next="levels" />
              </button>
            </div>
          )}
          {folder == "levels" && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 satoshi-medium">
              <button
                onClick={() => {
                  handleSetDisplayText("100-Level", "courses", "100 Level");
                  setLevel(100);
                }}
              >
                <Card type="large" text="100 Level" leaf={false} link={setFolder} next="courses" />
              </button>
              <button
                onClick={() => {
                  handleSetDisplayText("200-Level", "courses", "200 Level");
                  setLevel(200);
                }}
              >
                <Card type="large" text="200 Level" leaf={false} link={setFolder} next="courses" />
              </button>
              <button
                onClick={() => {
                  handleSetDisplayText("300-Level", "courses", "300 Level");
                  setLevel(300);
                }}
              >
                <Card type="large" text="300 Level" leaf={false} link={setFolder} next="courses" />
              </button>
              <button
                onClick={() => {
                  handleSetDisplayText("400-Level", "courses", "400 Level");
                  setLevel(400);
                }}
              >
                <Card type="large" text="400 Level" leaf={false} link={setFolder} next="courses" />
              </button>
            </div>
          )}
          {folder == "resources" && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 satoshi-medium">
              <button>
                <Card type="large" text="LECTURE NOTES" leaf={true} link="#" />
              </button>
              <button>
                <Card type="large" text="MATERIALS" leaf={true} link="#" />
              </button>
              <button>
                <Card type="large" text="PAST QUESTIONS" leaf={true} link="#" />
              </button>
            </div>
          )}
          {folder == "courses" && (
            <div className="w-full grid grid-cols-1 gap-10 satoshi-medium">
              <button
                onClick={() => {
                  handleSetDisplayText("GES-100", "resources", "GES100.1");
                  setCourse("GES100.1");
                }}
              >
                <Card type="thin" text="GES 100" leaf={false} link={setFolder} next="resources" />
              </button>
            </div>
          )}
        </div>
      </div>
    </Main>
  );
};

export default AppPage;
