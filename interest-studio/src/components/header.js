import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import myProfile from "./reducers/myProfile";
import interest_studio_logo_1 from "./interest studio.jpg";
import icon from "../ICON.jpg";
import profileIcon from "../profile_icon.jpg";
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
     
      <NavLink to="/"><img src={icon}  height="60" width="200"/></NavLink>
      <NavLink to={link} style={{ textDecoration: 'none' }} className="links" >Profile</NavLink> 
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
