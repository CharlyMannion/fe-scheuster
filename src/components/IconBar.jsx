import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const IconBar = () => {
    return (
      <footer className="iconbar">
        <SocialIcon url="http://twitter.com/goldenshoe" />
        <p></p>
        <SocialIcon url="http://facebook.com/goldenshoe" />
        <p></p>
        <SocialIcon url="http://instagram.com/goldenshoe" />
      </footer>
    );
  };
  
  export default IconBar;

