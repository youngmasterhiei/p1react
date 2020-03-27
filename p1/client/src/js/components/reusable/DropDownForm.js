import React, { useState } from "react";
import UserFormInput from "../ProfileComps/UserFormInput";
import UserProjectInput from "../ProfileComps/UserProjectInput";
import CreateEventForm from "../EventComps/CreateEventForm";

const DropDownForm = props => {
  const [open, setOpen] = useState(false);

 

  const toggle = () => setOpen(!open);


  return (
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
            {open ? (
              <button>Close {props.form.key}</button>
            ) : (
              <button>Open  {props.form.key} </button>
            )}{" "}
          </p>
        </div>
      </div>
      <div>
        {" "}
        {open && (
          <React.Fragment>
            <span key={props.index}>{props.form}</span>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default DropDownForm;
