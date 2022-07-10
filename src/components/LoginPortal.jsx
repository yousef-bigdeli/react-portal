import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LoginPortal = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    // window.history.pushState({}, "", "/");
    navigate(`${state.backUrl}`);
  };

  useEffect(() => {
    const handlePopState = (e) => {
      console.log(e);
    };
    
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const element = (
    <div className="login">
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h2>Lign form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );

  return createPortal(element, document.getElementById("login_root"));
};

export default LoginPortal;
