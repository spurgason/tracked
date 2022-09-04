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

      <section className="grid grid-cols-1 lg:grid-cols-3  container mx-auto">
        <AssignmentForm />

        <div className="w-auto h-56 lg:h-4/5 mx-2 md:mx-0 col-span-2 overflow-y-auto">
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
            <h2 className="font-bold text-xl sm:text-center mt-7 lg:mt-0">
              You do not have any assignments
            </h2>
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
