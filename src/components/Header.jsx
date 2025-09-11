import logo from "../assets/more/logo1.png";
import bgImg from "../assets/more/15.jpg";
import { Link } from "react-router-dom";
import { FiLogIn, FiUser } from "react-icons/fi"; // Login icon
export { logo };

const Header = () => {
  return (
    <header
      className="relative flex items-center justify-between px-[8%] py-6 shadow-md"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Center: Logo + Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-16 h-16" />
        <h1 className="text-4xl font-rancho text-white">Sip & Savor</h1>
      </div>

      {/* Right: Login Icon */}
      <div className="ml-auto flex items-center gap-4">
        {/* signup icon */}
        <Link
          to="/signup"
          className="text-white hover:text-amber-200 transition"
          title="Sign In"
        >
          <FiLogIn size={28} />
        </Link>
        {/* user icon */}
        <Link
          to="/users"
          className="text-white hover:text-amber-200 transition"
          title="Sign In"
        >
          <FiUser size={28} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
