import React from "react";
import {NavLink} from "react-router-dom";
import ProfileForm from "./profileform";
import {addperson} from "./action/person";
import {addMyProfoile} from "./action/myProfile";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";


const LoginPage=(props)=>(
    <div>
    <ProfileForm onSubmit={
        (profile)=>{
          const id=uuidv4();
          console.log(profile)
          const newProfile={...profile,id:id}
          console.log(newProfile)
           props.dispatch(addperson(newProfile))
           props.dispatch(addMyProfoile(newProfile))
          props.history.push("/")
        }
    }/>
    <NavLink to="/signUp">SignUpPage</NavLink>
     </div>
)
export default connect()(LoginPage);