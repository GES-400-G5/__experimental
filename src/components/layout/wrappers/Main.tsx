import { PropsWithChildren, Suspense } from "react";
import TopNav from "../Header";
import Footer from "../Footer";
import Modal from "../../ui/Modal";
import Form from "../../ui/Form";
import { sessionStore } from "../../../session/store";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { regex } from "../../ui/Form";
import SuspenseUI from "../../ui/SuspenseUI";

const Main = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = sessionStore((state) => state.id);

  const validate = async () => {
    if (location.pathname == "/app" && !regex.test(id)) navigate("/");
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Suspense fallback={<SuspenseUI />}>
      <TopNav />
      <Modal modalId="authentication">
        <Form />
      </Modal>
      <main>{children}</main>
      <Footer />
    </Suspense>
  );
};

export default Main;
