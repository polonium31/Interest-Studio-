import React from "react";
import {connect} from "react-redux";
import Contact from "../components/Contact";
import PersonsInterestList from "../components/PersonsInterestList";
import {removePerson} from "../components/action/person";
import {removeMyProfile,editMyProfile} from "../components/action/myProfile";
import {NavLink} from "react-router-dom";
import {invalidateuser} from "./action/authentaction";
import {validateediting} from "./action/authentaction"
const Profile=(props)=>{ 
 
   const person =props.peoples.filter((people)=>{
     return people.id===props.match.params.id
   });
  
   const pid=props.myProfile.length === 0 ?"": props.myProfile[0].id;
   const isProfile= pid === props.match.params.id;
    

    
   return (
    <div className="profile_container">
      {isProfile && <div className="accountSetting">
        <button onClick={()=>{
          props.dispatch(removePerson(pid))
          props.dispatch(removeMyProfile())
          props.dispatch(invalidateuser())
          props.history.push("/signUp")
       }}>Delete Account</button>
       <button onClick={()=>{
         props.dispatch(invalidateuser())
         props.history.push("/logIn")
         
       }}> Sign Out</button>
      
       <NavLink style={{ textDecoration: 'none' }} className="links"to="/editProfile" id="vibutton">  <button onClick={()=>{
        props.dispatch(validateediting());
      }}> Edit Profile</button> </NavLink>
        </div>}
        <div className="profile_detailes">
        {person.length !== 0 && (
          <div>
        <div className="profile_description_container">
          <h1 >
            <div className="profile_description_title">
                Name :
            </div>
            <div className="profile_description">
                {person[0].name}</div>
          </h1>
         </div>
        <div className="profile_description_container">
          <h2>
           <div className="profile_description_title">
             University :
           </div> 
           <div className="profile_description">
             {person[0].university}
            </div>
          </h2>
        </div>
        <div className="profile_description_container">
         <h2>
           <div className="profile_description_title">
             Contact :
              </div>
            <div className="profile_description">
             {!person[0].contact?"no contact to show":<Contact contact={person[0].contact} email={person[0].email}/>}
             </div>
             </h2>
        </div>
        <div className="profile_description_container">
         <h2>
           <div className="profile_description_title">
             Projects : 
              </div>
            <div className="profile_description">
             {!!!person[0].project?"no Projects to show":person[0].project}
             </div>
             </h2>
        </div>
        <div className="profile_description_container">
         <h2>
           <div className="profile_description_title">
             Year of Studing : 
              </div>
            <div className="profile_description">
             {person[0].year}
             </div>
             </h2>
        </div>
      
        <div className="profile_description_container">
        <h3>
         <div className="profile_description_title">
           Interest :
           </div> 
           <div className="profile_description">
            {person[0].interests.length ===0?"No interest is stilll subscribe":<PersonsInterestList interests={person[0].interests} id={props.match.params.id}/>}
          </div>
            </h3>
          </div>  
          </div>
        ) }
        </div>
      
    </div>
)
}
const mapStateToProp=(state)=>{
  
  return {
    peoples:state.person,
    myProfile:state.myProfile
  }
}
export default connect(mapStateToProp)(Profile);