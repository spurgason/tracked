import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "../features/assignments/assignmentSlice";

import { TrashIcon } from "@heroicons/react/solid";

const AssignmentItem = ({ assignment }, dates) => {
  const dispatch = useDispatch();

  const convertedDate = () => {
    const splitDate = assignment.dueDate.split("-");
    // If date method is ran on a format other than mm/dd/yyyy it will return incorrect date
    const formattedDate = [splitDate[1], splitDate[2], splitDate[0]].join("-");
    const date = new Date(formattedDate).toString();
    return date.substr(date.indexOf(" ") + 1, 11);
  };

  return (
    <div className="border-l-4 border-grey-700">
      <div className="flex justify-center items-center sm:space-x-10 md:space-x-24  xl: space-x-10 2xl:space-x-60  rounded-md  bg-teal-100 mt-3 mx-3 p-2 shadow">
        <h3 className=" text-gray-900 text-md xl: text-base font-medium">
          {assignment.assignment}
        </h3>
        <p className="text-md text-gray-900 font-medium">
          {assignment.className}
        </p>
        <p className="text-md text-gray-900 font-medium">{convertedDate()}</p>
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
