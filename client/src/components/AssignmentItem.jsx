const AssignmentItem = ({ assignment }) => {
  return (
    <div className="flex items-center border-2 border-grey-500 rounded-md mt-3 p-2">
      <h3 className="text-start">{assignment.assignment}</h3>
      <p className="text-start">{assignment.className}</p>
      <p className="text-start">{assignment.dueDate}</p>
    </div>
  );
};
export default AssignmentItem;
