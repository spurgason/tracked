// Components
import LogoText from "../components/LogoText";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <div className="min-h-full flex justify-center items-center mt-48 py-12 px-4 ">
        <div className="max-w-md w-full space-y-4">
          <LogoText />
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-1">
            Sign In
          </h2>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
