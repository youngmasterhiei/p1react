import React, { useState, useRef } from "react";
import UserFormInput from "../ProfileComps/UserFormInput";

const DropDownForm = props => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const closeToggle = () => {
    setOpen(!open);
  };
  // using switch statement to select the correct form
  const selectForm = formTitle => {
    switch (formTitle) {
      case "Edit Profile":
        return (
          <UserFormInput
            formCallback={props.formCallback}
            toggleDropdown={toggle}
          />
        );
        break;
      // case "Orange":
      //   text = "I am not a fan of orange.";
      //   break;
      // case "Apple":
      //   text = "How you like them apples?";
      //   break;
      default:
        text = "I have never heard of that fruit...";
    }
  };

  return (
    console.log(props),
    (
      <div className="dd-wrapper">
        <div
          tabIndex={0}
          className="dd-header"
          role="button"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          {/* , header(title)  */}
          <div className="dd-header_title">
            <p className="dd-header_title-bold"></p>
          </div>
          <div className="dd-header_action">
            <p>
              {open ? <button>Close </button> : <button>{props.name}</button>}{" "}
            </p>
          </div>
        </div>
        <div>
          {" "}
          {open && (
            <span>
              {selectForm(props.name)}
              {/* <UserFormInput /> */}
            </span>
          )}
        </div>
      </div>
    )
  );
};

export default DropDownForm;
