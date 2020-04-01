import React from "react";


const UserDetails = props => {
  
  const propData = Object.values(props.data);

          // console.log("user profile from redux");
        // // const usersProfile = useSelector(state => state.profile);
    props.passedFunction(props.data)
        // console.log(props);
  return (
    <div>
      <ul style={{listStyle:'none'}}>
        {propData.map((data, i) => (
          <li key={i}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
