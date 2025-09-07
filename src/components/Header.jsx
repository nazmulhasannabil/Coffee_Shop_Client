import logo from "../assets/more/logo1.png";
import bgImg from "../assets/more/15.jpg";

const Header = () => {
  return (
    <header 
    className="flex items-center justify-center p-3 shadow-md"
    style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <img src={logo} alt="Logo" className="w-16 h-16" />
      <h1 className="text-2xl font-rancho text-white">Espresso Emporium</h1>
    </header>
  );
};

export default Header;
