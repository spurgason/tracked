import { useDispatch } from "react-redux";
import { deleteAssignment } from "../features/assignments/assignmentSlice";

import { TrashIcon } from "@heroicons/react/solid";

const AssignmentItem = ({ assignment }) => {
  const dispatch = useDispatch();
  return (
    <div className="border-l-4 border-grey-700 ">
      <div className="flex justify-center items-center sm:space-x-10 md:space-x-24  xl: space-x-10 2xl:space-x-60  rounded-md  bg-teal-100 mt-3 mx-3 p-2">
        <h3 className="text-md xl: text-base font-medium">
          {assignment.assignment}
        </h3>
        <p className="text-md font-medium">{assignment.className}</p>
        <p className="text-md font-medium">{assignment.dueDate}</p>
        <button
          className="text-md font-medium text-red-600"
          onClick={() => dispatch(deleteAssignment(assignment._id))}
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
export default AssignmentItem;
