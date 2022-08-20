import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AssignmentForm from "../components/AssignmentForm";
import AssignmentItem from "../components/AssignmentItem";
import Spinner from "../components/Spinner";
import { getAssignments } from "../features/assignments/assignmentSlice";
import { reset } from "../features/auth/authSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { assignments, isLoading, isError, message } = useSelector(
    (state) => state.assignments
  );

  useEffect(() => {
    if (isError) {
      console.error(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getAssignments());

    return () => {
      dispatch(reset());
    };
  }, [navigate, user, isError, message, dispatch]);

  if (isLoading) {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <Spinner />;<h3 className=" font-xl font-bold ">Loading...</h3>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="flex justify-center mt-5">
        <h1 className="text-center font-bold text-3xl border-b-2 my-3 pb-2 w-2/3">
          Hello, {user && user.name} &#128075;
        </h1>
      </section>

      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-5 mx-5">
        <div className="sm: w-auto  mx-2 lg:col-span-1 sm: col-span-2 border-2 rounded-md border-teal-600 p-6">
          <AssignmentForm />
        </div>
        <div className=" w-auto col-span-2">
          {assignments &&
          assignments.assignment &&
          assignments.assignment.length > 0 ? (
            <div className="">
              {assignments.assignment.map((assignment) => (
                <AssignmentItem key={assignment._id} assignment={assignment} />
              ))}
            </div>
          ) : (
            <h2 className="font-bold text-xl sm: text-center">
              You do not have any assignments
            </h2>
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
