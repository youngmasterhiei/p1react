import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { renderComp } from "../../../redux/actions/index";

const FormSubmitHelper = props => {
  console.log(props);

  const storeSwitchRedux = e => {
    e.preventDefault();
    props.submitProfile();
    // const dispatch = useDispatch();
    // dispatch(renderComp(true));
  };

  return (
    <div>
      {/* <input onClick={storeSwitchRedux()}>Submit</input> */}
      <input type="submit" onSubmit={storeSwitchRedux} name="Submit" />
    </div>
  );
};

FormSubmitHelper.propTypes = {};

export default FormSubmitHelper;
