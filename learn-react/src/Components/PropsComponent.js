function PropsComponent(props) {
  console.log(" |> - Props Component - ", props);
  return (
    <>
      <pre>
        Props Component
        {props?.title}
        {props?.description}
        {props?.data}
      </pre>
      <button
        onClick={() => {
          console.log(" |> Props Component");
          props?.clickFunction();
        }}
      >
        Props Click
      </button>
    </>
  );
}
export default PropsComponent;
