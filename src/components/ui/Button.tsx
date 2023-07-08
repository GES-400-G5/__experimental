import { sessionStore, useStore } from "../../session/store";
import { useNavigate, useLocation } from "react-router-dom";
import { regex } from "./Form";

const Button = ({ className }: { className: string }) => {
  const store = useStore(sessionStore, (state) => state);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {store?.id && regex.test(store.id) ? (
        location.pathname == "/app" ? (
          <button className={`btn btn-ghost capitalize ${className}`} onClick={() => store?.setId("")}>
            Sign Out
          </button>
        ) : (
          <button className={`btn btn-ghost capitalize ${className}`} onClick={() => navigate("app")}>
            Go To Resources
          </button>
        )
      ) : (
        <label className={`btn btn-ghost capitalize ${className}`} htmlFor="authentication">
          Access resources
        </label>
      )}
    </>
  );
};

export default Button;
