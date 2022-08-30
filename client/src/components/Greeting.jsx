const Greeting = (props) => {
  return (
    <section className="flex justify-center mt-5">
      <h1 className="text-center font-bold text-3xl border-b-2 my-3 pb-2 w-2/3">
        Welcome back,{" "}
        <span className="text-teal-600">{props.user && props.user.name}</span>
      </h1>
    </section>
  );
};
export default Greeting;
