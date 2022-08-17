import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AssignmentForm from "../components/AssignmentForm";
import AssignmentItem from "../components/AssignmentItem";
import { getAssignments, reset } from "../features/assignments/assignmentSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { assignments, isLoading, isError, message } = useSelector(
    (state) => state.assignments
  );

  if (
    assignments &&
    assignments.assignment &&
    assignments.assignment.length > 0
  ) {
    console.log(assignments.assignment);
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

  return (
    <>
      <section className="text-center">
        <h1>Hello, {user && user.name}</h1>
      </section>

      <section className="flex flex-row p-12">
        <div className=" flex justify-center basis-1/4 border-2 rounded-md border-teal-600 p-6">
          <AssignmentForm />
        </div>
        <div className=" border-l-4 border-grey-100 basis-3/4 p-2 ml-6">
          {assignments &&
          assignments.assignment &&
          assignments.assignment.length > 0 ? (
            <div className="">
              {assignments.assignment.map((assignment) => (
                <AssignmentItem key={assignment._id} assignment={assignment} />
              ))}
            </div>
          ) : (
            <h2>You do not have any assignments</h2>
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
