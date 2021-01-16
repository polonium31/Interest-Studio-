import React from "react";
import { editMyProfile } from "./action/myProfile";
import {editPerson} from "./action/person";
import ProfileForm from "./profileform";
import {connect} from "react-redux";
import {invalidateediting, validateediting} from "./action/authentaction";
const EditProfile=(props)=>{
  return (
    <div>
    <ProfileForm onSubmit={
      (profile)=>{
        const id=props.myProfile[0].id     
        const newProfile={...profile,id}  
         props.dispatch(editMyProfile(newProfile))
        props.dispatch(editPerson(newProfile,id))
        props.dispatch(invalidateediting());
        props.history.push("/")
      }
  }/>
    </div>
)
}
const stateMapToProps=(state)=>{
  return {
     myProfile:state.myProfile,
     auth:state.authentication
  }
}
export default connect(stateMapToProps)(EditProfile);
