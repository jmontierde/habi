// import avatar from "/src/assets/avatar.png";
import { Link } from "react-router-dom";
import userIcon from "/src/assets/user-icon.png";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 px-16 items-center ">
      <div>Habi</div>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contanct</Link>
        <Link to="agent">Agent</Link>
      </div>
      <Link to="/register">
        <img src={userIcon} className="w-8 h-8" alt="" />
      </Link>
    </div>
  );
};

export default Navbar;
