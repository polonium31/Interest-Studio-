import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import myProfile from "./reducers/myProfile";
const Header=(props)=>{
  
   const link = props.myProfile.length !== 0 ? `/profile/${props.myProfile[0].id}` :"/";
   
  return (
    <div>
      <h1>Interest Studio</h1>   
      <NavLink to={link} >Profile</NavLink>
      <NavLink to="/">ExploreFields</NavLink> 
      <NavLink to="/editProfile"> EditProfile </NavLink> 
      <NavLink to="/login">LoginPage</NavLink>
    </div>
)
}
const mapStateToProps=(state)=>{
   
  return {
   myProfile:state.myProfile
 }
}
export default connect(mapStateToProps)(Header);