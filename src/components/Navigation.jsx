import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login" state={{ backUrl: pathname }}>
        Login
      </NavLink>
      <NavLink to="/product">Products list</NavLink>
    </nav>
  );
};

export default Navigation;
