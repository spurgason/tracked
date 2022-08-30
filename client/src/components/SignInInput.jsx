const SignInInput = (props) => {
  return (
    <div>
      <label htmlFor={props.attributes} className="sr-only">
        {props.text}
      </label>
      <input
        id={props.attributes}
        name={props.attributes}
        type={props.type}
        value={props.value}
        minLength={props.minLength}
        title={props.title}
        pattern={props.pattern}
        required
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
        placeholder={props.text}
        onChange={props.onChange}
      />
    </div>
  );
};
export default SignInInput;
