// Imports
import { Link } from "react-router-dom";

const ExistingUserLink = () => {
  return (
    <div className="grid justify-items-end text-sm">
      <span className="font-medium  text-teal-600 hover:text-teal-500">
        <Link to="/login"> Already have an account?</Link>
      </span>
    </div>
  );
};
export default ExistingUserLink;
