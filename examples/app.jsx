import React from 'react';
import {render} from 'react-dom';
import applePay from '../src/applePay';
import SimpleButton from '../src/SimpleButton';

const applePayButtonStyles = {
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

// If apple pay is supported render the apple pay button
if(applePay.canMakePayments()){
	render(
		<SimpleButton style={applePayButtonStyles} onClick={applePay.startApplePay}/>, 
		document.getElementById('app') 
	);
}
