// Imports
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";

// Components
import SignInBtn from "../components/SignInBtn";
import SignInInput from "../components/SignInInput";
import Spinner from "../components/Spinner";
import ExistingUserLink from "./ExistingUserLink";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = formData;

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (event) => {
    setFromData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div className="space-y-1.5">
        <SignInInput
          onChange={onChange}
          value={name}
          type={"text"}
          attributes={"name"}
          text={"Name"}
        />

        <SignInInput
          onChange={onChange}
          value={email}
          type={"email"}
          attributes={"email"}
          text={"Email"}
        />

        <SignInInput
          onChange={onChange}
          value={password}
          type={"password"}
          attributes={"password"}
          text={"Password"}
          minLength={"6"}
          title={
            "Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character"
          }
          pattern={
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
          }
        />

        <SignInInput
          onChange={onChange}
          value={passwordConfirm}
          type={"password"}
          attributes={"passwordConfirm"}
          text={"Confirm Password"}
        />
      </div>
      <ExistingUserLink />
      <SignInBtn />
    </form>
  );
};
export default RegisterForm;
