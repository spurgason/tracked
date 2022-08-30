// Imports
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getAssignments } from "../features/assignments/assignmentSlice";
import { reset } from "../features/auth/authSlice";

// Components
import Greeting from "../components/Greeting";
import AssignmentForm from "../components/AssignmentForm";
import AssignmentItem from "../components/AssignmentItem";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { assignments, isLoading, isError, message } = useSelector(
    (state) => state.assignments
  );

  let totalAssignments = [];

  if (
    assignments &&
    assignments.assignment &&
    assignments.assignment.length > 0
  ) {
    totalAssignments = [...assignments.assignment];
  }

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
    return <Spinner />;
  }

  return (
    <>
      <Greeting user={user} />

      <section className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3  mt-5 mx-5">
        <div className=" mx-2 col-span-1 border-2 rounded-md border-white p-6 shadow-[0_4px_6px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_15px_7px_rgba(0,0,0,0.3)] hover: ease-in duration-100">
          <AssignmentForm />
        </div>
        <div className=" w-auto col-span-2 mt-5">
          {totalAssignments && totalAssignments.length > 0 ? (
            <div>
              {totalAssignments
                .sort((a, b) =>
                  new Date(a.dueDate).getTime() > new Date(b.dueDate).getTime()
                    ? 1
                    : -1
                )
                .map((assignment) => (
                  <AssignmentItem
                    key={assignment._id}
                    assignment={assignment}
                  />
                ))}
            </div>
          ) : (
            <h2 className="font-bold text-xl sm: text-center sm: mt-7">
              You do not have any assignments
            </h2>
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
