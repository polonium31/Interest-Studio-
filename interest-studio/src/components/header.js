import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import myProfile from "./reducers/myProfile";
import interest_studio_logo_1 from "./interest studio.jpg"
// const Interest_studio_logo = ()=>(
//   <div>
//   <img src={interest_studio_logo_1} alt="Interest Studio" value="Interest Studio" className="logo" />
//  </div>
//
// )
const Header=(props)=>{

   const link = props.myProfile.length !== 0 ? `/profile/${props.myProfile[0].id}` :"/";


  return (
    <div>
    <div className="header">
      <NavLink style={{ textDecoration: 'none' }} className="links"to={link} >Profile</NavLink>
      <NavLink style={{ textDecoration: 'none' }} className="links"to="/">ExploreFields</NavLink>
      <NavLink style={{ textDecoration: 'none' }} className="links"to="/editProfile"> EditProfile </NavLink>
      <NavLink  style={{ textDecoration: 'none' }} className="links"to="/login">Sign In/Sign Up</NavLink>

    </div>

    </div>


)
}
const mapStateToProps=(state)=>{

  return {
   myProfile:state.myProfile
 }
}
export default connect(mapStateToProps)(Header);
