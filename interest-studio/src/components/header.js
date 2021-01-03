import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import myProfile from "./reducers/myProfile";
import Interest_studio_logo from  "./interest studio.jpg";
const Header=(props)=>{

   const link = props.myProfile.length !== 0 ? `/profile/${props.myProfile[0].id}` :"/";

  return (
    <div className="header">
      <NavLink className="links"to={link} >Profile</NavLink>
      <NavLink className="links"to="/">ExploreFields</NavLink>
      <NavLink className="links"to="/editProfile"> EditProfile </NavLink>
      <NavLink className="links"to="/login">Sign In/Sign Up</NavLink>

    </div>

)
}
const mapStateToProps=(state)=>{

  return {
   myProfile:state.myProfile
 }
}
export default connect(mapStateToProps)(Header);
