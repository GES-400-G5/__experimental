export const data: {
  [key: string]: {
    [key: number]: {
      [courses: string]: {
        [key: string]: string;
      }[];
    };
  };
} = {
  semester1: {
    100: {
      resources: [
        {
          name: "GES 100",
          code: "GES100.1",
          title: "GES 100.1 Computer Skill in English",
          lecture_notes: "",
          materials: "",
          past_questions: "",
        },
        {
          name: "GES 102",
          code: "GES102.1",
          title: "GES 102.1 Introduction to Logic & Philosophy",
          lecture_notes: "",
          materials: "",
          past_questions: "https://drive.google.com/file/d/1-ZBw_jklEFp3-3Brfd9HM_hxrGH1t5Qo/view?usp=drivesdk",
        },
        {
          name: "MTH 110",
          code: "MTH110.1",
          title: "MTH 110.1 Algebra and Trigonometry",
          lecture_notes: "",
          materials: "",
          past_questions: "",
        },
        {
          name: "MTH 120",
          code: "MTH120.1",
          title: "MTH 120.1 Calculus",
          lecture_notes: "",
          materials: "",
          past_questions: "",
        },
        {
          name: "PHY 101",
          code: "PHY101.1",
          title: "PHY 101.1 Mechanics and Properties of Matter",
          lecture_notes: "",
          materials: "",
          past_questions: "",
        },
        {
          name: "CSC 180",
          code: "CSC180.1",
          title: "CSC 180.1 Introduction to Computer Science and Basic Programming",
          lecture_notes: "",
          materials: "",
          past_questions: "",
        },
        {
          name: "CHM 130",
          code: "CHM130.1",
          title: "CHM 130.1 General Chemistry",
          lecture_notes: "",
          materials: "",
          past_questions: "",
        },
        {
          name: "FSB 101",
          code: "FSB101.1",
          title: "FSB 101.1 General Biology 1",
          lecture_notes: "",
          materials: "",
          past_questions: "",
        },
      ],
    },
    200: {},
    300: {},
    400: {},
  },
  semester2: {
    100: {},
    200: {},
    300: {},
    400: {},
  },
};
