import { PropsWithChildren } from "react";
import TopNav from "../Header";
import Footer from "../Footer";
import Modal from "../../ui/Modal";
import Form from "../../ui/Form";
import { sessionStore, useStore } from "../../../session/store";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { regex } from "../../ui/Form";

const Main = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = useStore(sessionStore, (state) => state.id);

  const reRoute = (to: string) => {
    switch (to) {
      case "/__experimental/app":
        if (location.pathname !== "/__experimental/app/" && id && regex.test(id)) navigate(to);
        break;
      default:
        if (location.pathname !== "/__experimental/" && location.pathname !== to) navigate(to);
        break;
    }
  };

  const validate = async () => {
    switch (id !== "") {
      case true:
        reRoute("/__experimental/app");
        break;
      default:
        reRoute("/__experimental/");
        break;
    }
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <TopNav />
      <Modal modalId="authentication">
        <Form />
      </Modal>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
