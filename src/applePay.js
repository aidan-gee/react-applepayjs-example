const APPLEPAY_SUPPORTED = window.ApplePaySession ? true : false;
const API_VERSION = 1;
const LOCALE = 'GB';
const MERCHANT_IDENTIFIER = 'merchant.identifier';





const applePay = {
	
	/**
	*	canMakePaymentsWithActiveCard
	*
	* @description checks if apple pay API is supported & user has an active payment cards
	* apple states this should only be used on product pages
	*
	* @return promise
	*
	* @note This promised always resolves but the data should be checked so a
	* false response ( To immitate the response from canMakePaymentsWithActiveCard )
	*/
	canMakePaymentsWithActiveCard(){
		if(APPLEPAY_SUPPORTED){
              return ApplePaySession.canMakePaymentsWithActiveCard(MERCHANT_IDENTIFIER);
		}else{
			return Promise.resolve(false);
		}
	},
	
	/**
	*	canUserMakePayments
	*
	* @description Checks if the user can make an apple payment with their OS version AND
	* if a desktop user has a phone or watch to verify
	*
	* @return boolean
	*/
    canMakePayments() {
       if(APPLEPAY_SUPPORTED){
              return ApplePaySession.canMakePayments(MERCHANT_IDENTIFIER);
		}
    },
	
	/**
	*	createNewApplePaySession
	*
	* @description Creates and starts a new apple session using the api version constant
	* at the top of this file. It then attatches all the event listeners.
	* 
	* Possible event callback properties 
	*
	* {
	*	onpaymentauthorized,
	*	onpaymentmethodselected,
	*	onshippingcontactselected,
	*	onshippingmethodselected,
	*	onvalidatemerchant,
	*	oncancel
	* }
	*
	* @param object (paymentRequest)
	* @param object (eventCallbacks)
	*
	*/
    startApplePaySession(paymentRequest, eventCallbacks){
		
        let session = new ApplePaySession(API_VERSION, paymentRequest);
		
		Object.assign(session, eventCallbacks);
		
		session.begin();
		
		return session;

    },
}



export default applePay;