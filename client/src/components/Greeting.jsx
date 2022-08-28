const Greeting = (props) => {
  return (
    <section className="flex justify-center mt-5">
      <h1 className="text-center font-bold text-3xl border-b-2 my-3 pb-2 w-2/3">
        Hello, {props.user && props.user.name} &#128075;
      </h1>
    </section>
  );
};
export default Greeting;
