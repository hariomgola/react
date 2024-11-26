// When Using direct props
function PropsComponent(props) {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.description}</div>
    </>
  );
}

// When using the destructuring method
// eslint-disable-next-line no-unused-vars
function _PropsComponent({ title, description }) {
  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
}

export default PropsComponent;
