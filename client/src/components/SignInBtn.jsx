// Icons
import { LoginIcon } from "@heroicons/react/outline";

const SignInBtn = () => {
  return (
    <div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <LoginIcon
            className="h-5 w-5 text-teal-500 group-hover:text-teal-400"
            aria-hidden="true"
          />
        </span>
        Sign in
      </button>
    </div>
  );
};
export default SignInBtn;
