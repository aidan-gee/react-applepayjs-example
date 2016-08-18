const styles = {
  backgroundImage: "-webkit-named-image(apple-pay-logo-white)",
  backgroundColor: "black", 
  backgroundSize: "100% 60%",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	border: "1px solid transparent",
  borderRadius: "4px",
  minHeight: "50px",
  minWidth: "150px"
}

const createApplePayButton = React => (props) => {

  return (
      <button style={styles}>apple pay</button>
  );
};

export default createApplePayButton;
