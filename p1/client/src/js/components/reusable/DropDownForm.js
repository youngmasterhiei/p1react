import React, { useState } from "react";
import UserFormInput from "../ProfileComps/UserFormInput";
import UserProjectInput from "../ProfileComps/UserProjectInput";

const DropDownForm = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  // using switch statement to select the correct form
  const selectForm = (formTitle) => {
    switch (formTitle) {
      case "Edit Profile":
        return (
          <UserFormInput
            formCallback={props.formCallback}
            toggleDropdown={toggle}
            formApiAction={props.formApiAction}
          />
        );
      case "Edit Projects":
        return (
          <UserProjectInput
            formCallback={props.formCallback}
            toggleDropdown={toggle}
            formApiAction={props.formApiAction}
          />
        );
      default:
        throw Error("This should not happen");
    }
  };

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header_title">
          <p className="dd-header_title-bold"></p>
        </div>
        <div className="dd-header_action">
          <p>
            {open ? <button>Close </button> : <button>{props.name}</button>}{" "}
          </p>
        </div>
      </div>
      <div> {open && <span>{selectForm(props.name)}</span>}</div>
    </div>
  );
};

export default DropDownForm;
