import React, { useState } from "react";

const DropDownForm = props => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  return (
    console.log(props.name),

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
          <p>{open ? <button>Close </button> : <button>{props.name}</button>} </p>
        </div>
      </div>
      <div> {open && <span>{props.data.comp}</span>}</div>
    </div>
  );
};

export default DropDownForm;
