import React from 'react';

const SimpleButton = ( {children, onClick, style} ) =>
  <button style={style} onClick={onClick}>
    {children}
  </button>;


export default SimpleButton;
