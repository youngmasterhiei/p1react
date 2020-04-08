import React, { useEffect, useRef } from "react";
import DropDownForm from "../reusable/DropDownForm";

const UserDetails = props => {
  const propData = Object.values(props.data);
  // const dropdownRef = useRef(null)
  // console.log(props.comp.key);
  // console.log("here")
  // console.log("user profile from redux");
  // // const usersProfile = useSelector(state => state.profile);
  // props.passedFunction(props.data)
  // console.log(props);

  useEffect(()=> {

    // dropdownRef.current.toggle(!open)
  }, [])
  return (
    // const forms = <
    <div>
      <ul style={{ listStyle: "none" }}>
        {propData.map((data, i) => (
          <li key={i}>{data}</li>
        ))}
      </ul>
      <DropDownForm data={props} name={props.comp.key}  />
    </div>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
