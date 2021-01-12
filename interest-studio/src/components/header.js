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
     <div className="header_home"><NavLink to="/"><img src={icon}  height="60" width="200"/></NavLink></div>
    <div className="header_profile"><NavLink to={link} style={{ textDecoration: 'none' }} className="links" ><img src={profileIcon} height="80px" width="100px" /></NavLink> </div>
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
