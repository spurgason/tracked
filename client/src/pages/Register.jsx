// Components
import LogoText from "../components/LogoText";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <>
      <div className="min-h-full flex justify-center items-center mt-32 py-12 px-4 ">
        <div className="max-w-md w-full space-y-8">
          <LogoText />
          <h2 className="text-center text-3xl font-extrabold text-grey-900 mt-1 ">
            Register your account
          </h2>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Register;
