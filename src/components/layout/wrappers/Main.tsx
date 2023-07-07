import { PropsWithChildren } from "react";
import TopNav from "../Header";
import Footer from "../Footer";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
