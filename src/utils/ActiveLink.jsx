
import { NavLink } from "react-router-dom";

export default function ActiveLink({ to, children }) {
  return (
    <NavLink to={to}
      className={({ isActive }) =>
        isActive
          ? "text-white  bg-[#136b7a] font-bold border-b-2 border-white"
          : "text-gray-300 hover:text-white"
      }
    >
      {children}
    </NavLink>
  );
}
