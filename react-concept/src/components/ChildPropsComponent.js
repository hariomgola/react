function _ChildPropsComponent(props) {
  function handleButtonClick() {
    console.log("|> Button is Clicked");
  }
  return (
    <>
      <button onClick={handleButtonClick}>{props.children}</button>
    </>
  );
}

export default function ChildPropsComponent({ children, onSelect }) {
  return (
    <>
      <button onClick={onSelect}>{children}</button>
    </>
  );
}
