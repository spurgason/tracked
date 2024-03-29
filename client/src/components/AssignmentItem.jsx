// Imports
import { useDispatch } from "react-redux";

// Redux
import { deleteAssignment } from "../features/assignments/assignmentSlice";

// Icons
import { TrashIcon } from "@heroicons/react/solid";

const AssignmentItem = ({ assignment }) => {
  const dispatch = useDispatch();

  // Date must be in mm/dd/yyyy for the Date constructor to read and convert to proper date
  const splitDate = assignment.dueDate.split("-");
  const formattedDate = new Date(
    [splitDate[1], splitDate[2], splitDate[0]].join("-")
  ).toString();
  const dueDate = formattedDate.substr(formattedDate.indexOf(" ") + 1, 11);

  const passedDue = new Date(formattedDate).getTime() < new Date().getTime();

  return (
    <div className="border-l-4 border-grey-700">
      <div
        className={`grid grid-cols-4 justify-items-center content-center rounded-md mt-3 mx-3 p-2 shadow  hover:shadow-md ${
          passedDue ? "bg-yellow-200" : "bg-teal-200"
        }`}
      >
        <span className="text-sm lg: text-md text-gray-900 font-semibold self-center">
          {assignment.assignment}
        </span>
        <span className="text-sm lg: text-md text-gray-900 font-semibold self-center">
          {assignment.className}
        </span>
        <time className="text-sm lg: text-md text-gray-900 font-semibold self-center">
          {dueDate}
        </time>
        <button
          className="text-md font-medium text-red-500 hover:text-red-700"
          onClick={() => dispatch(deleteAssignment(assignment._id))}
        >
          <TrashIcon className="h-5 w-5 hover:scale-125 transition delay-150 duration-200" />
        </button>
      </div>
    </div>
  );
};
export default AssignmentItem;
