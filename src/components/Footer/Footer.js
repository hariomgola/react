// importing libraries
import React from "react";
import "./Footer.css";

// functionality start from here
const Footer = () => {
  /**
   * Displayed text
   */
  const _content = [
    "Created and developer by @hari from scrach to production",
    "No one Absolutely no one can close the door that 'GOD' has open for you",
    "No copyright issues. Feel free to copy anything and everything from this website.",
    "If you need any help, ping me ! @ https://github.com/hariomgola",
    "Oh God that's it, Let me move you to the desired notes",
  ];

  /**
   * Defining global variable here
   */
  let _part = 0; // current sentence
  let _partIndex = 0; // number of character in sentence
  let _interval; // hold the settimeout time

  /**
   * Typing effect
   */
  const _typing = () => {
    let text = _content[_part].substring(0, _partIndex + 1);
    document.getElementById("copyright-line").innerHTML = text;
    _partIndex++;

    // logic after full sentence is completed
    if (text === _content[_part]) {
      // Hiding the cursor
      document.getElementById("cursor").style.display = "none";
      clearInterval(_interval);
      // creating a settimeout
      setTimeout(() => {
        _interval = setInterval(_deleting, 50);
      }, 1000);
    }
  };
  /**
   * Deleting effect
   */
  const _deleting = () => {
    let text = _content[_part].substring(0, _partIndex - 1);
    document.getElementById("copyright-line").innerHTML = text;
    _partIndex--;

    // logic after full sentence is deleted
    if (text === "") {
      clearInterval(_interval);

      // logic to display the array text in loop
      if (_part === _content.length - 1) {
        _part = 0;
      } else {
        _part++;
      }
      _partIndex = 0;

      // logic to display the new sentence
      setTimeout(() => {
        document.getElementById("cursor").style.display = "inline-block";
        _interval = setInterval(_typing, 100);
      }, 200);
    }
  };

  // starting the typing effect onload functionality
  _interval = setInterval(_typing, 100);
  return (
    <div className="copyright">
      <div id="copyright-line" className="copyright-line"></div>
      <div id="cursor" className="cursor"></div>
    </div>
  );
};

// exporting functionality
export default Footer;
