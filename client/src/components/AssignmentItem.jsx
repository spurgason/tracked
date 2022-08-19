import { useDispatch } from "react-redux";
import { deleteAssignment } from "../features/assignments/assignmentSlice";

const AssignmentItem = ({ assignment }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center border-2 border-grey-500 rounded-md mt-3 p-2">
      <h3 className="text-start">{assignment.assignment}</h3>
      <p className="text-start">{assignment.className}</p>
      <p className="text-start">{assignment.dueDate}</p>
      <button onClick={() => dispatch(deleteAssignment(assignment._id))}>
        X
      </button>
    </div>
  );
};
export default AssignmentItem;
