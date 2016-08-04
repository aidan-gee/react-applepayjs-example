import React from 'react';
import {render} from 'react-dom';
import createApplePayButton from '../src/ApplePayButton';

const Button = createApplePayButton(React);

render(<Button />, document.getElementById('app') );
