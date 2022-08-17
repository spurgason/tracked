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
    <div className="mt-8 w-96">
      <h2 className="text-center font-semibold text-lg">Add Assignment</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
        <label className="block">
          <span>Assignment</span>
          <input
            type="text"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
            name="assignment"
            id="assignment"
            value={assignment}
            onChange={onChange}
          />
        </label>
        <label className="block">
          <span>Class</span>
          <input
            type="text"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
            name="className"
            id="className"
            value={className}
            onChange={onChange}
          />
        </label>
        <label className="block">
          <span>Due Date</span>
          <input
            type="date"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
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
  );
};
export default AssignmentForm;
