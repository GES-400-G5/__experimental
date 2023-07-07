import { PropsWithChildren } from "react";
import Section from "../../home/CTA";
import Main from "./Main";

const Action = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Main>
        {children}
        <Section />
      </Main>
    </>
  );
};

export default Action;
