import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAssignment } from "../features/assignments/assignmentSlice";

const initialForm = {
  assignment: "",
  className: "",
  dueDate: "",
};

const AssignmentForm = () => {
  const [formData, setFormData] = useState({
    assignment: "",
    className: "",
    dueDate: "",
  });

  const { assignment, className, dueDate } = formData;

  const dispatch = useDispatch();

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const assignmentData = {
      assignment,
      className,
      dueDate,
    };

    dispatch(createAssignment(assignmentData));
    setFormData(initialForm);
  };

  return (
    <div className=" mx-4 border-2 rounded-md border-white self-start p-6 shadow-[0_4px_6px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_15px_7px_rgba(0,0,0,0.3)] hover: ease-in duration-100">
      <div className="mt-8 w-auto">
        <h2 className="text-center font-semibold text-2xl mb-4">
          Add Assignment
        </h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="font-medium text-lg">Assignment</span>
            <input
              type="text"
              className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-teal-600
                  "
              name="assignment"
              id="assignment"
              value={assignment}
              onChange={onChange}
            />
          </label>
          <label className="block">
            <span className="font-medium text-lg">Class</span>
            <input
              type="text"
              className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-teal-600
                  "
              name="className"
              id="className"
              value={className}
              onChange={onChange}
            />
          </label>
          <label className="block">
            <span className="font-medium text-lg">Due Date</span>
            <input
              type="date"
              className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-teal-600
                  "
              name="dueDate"
              id="dueDate"
              value={dueDate}
              onChange={onChange}
            />
          </label>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default AssignmentForm;
