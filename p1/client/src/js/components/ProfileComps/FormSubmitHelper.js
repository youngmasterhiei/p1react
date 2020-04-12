import React from "react";

const FormSubmitHelper = (props) => {
  const storeSwitchRedux = (e) => {
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
