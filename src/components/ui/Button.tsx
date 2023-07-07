import { sessionStore, useStore } from "../../session/store";
import { useNavigate } from "react-router-dom";
import { regex } from "./Form";

const Button = ({ className }: { className: string }) => {
  const id = useStore(sessionStore, (state) => state.id);
  const navigate = useNavigate();

  return (
    <>
      {id && regex.test(id) ? (
        <button className={className} onClick={() => navigate("/__experimental/app/")}>
          Go To Resources
        </button>
      ) : (
        <label className={className} htmlFor="authentication">
          Access resources
        </label>
      )}
    </>
  );
};

export default Button;
