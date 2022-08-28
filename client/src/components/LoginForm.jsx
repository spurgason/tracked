// Imports
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Redux
import { login, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

// Components
import SignInBtn from "../components/SignInBtn";
import SignInInput from "../components/SignInInput";
import Spinner from "../components/Spinner";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div className="space-y-1.5">
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
        />
      </div>
      <SignInBtn />
    </form>
  );
};
export default LoginForm;
