// Logos
import Logo from "../assets/images/Logo.svg";

const LogoText = () => {
  return (
    <div className="flex justify-center items-center mb-5">
      <img className="h-16 w-auto" src={Logo} alt="Track" />
      <h2 className="font-bold h-15 text-5xl ml-4 italic text-gray-900 ">
        Tracked{" "}
      </h2>
    </div>
  );
};
export default LogoText;
