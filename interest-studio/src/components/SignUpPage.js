import React  from "react";
import {v4 as uuidv4} from "uuid";
import {NavLink} from "react-router-dom";
import ProfileForm from "./profileform";
import {addperson} from "./action/person";
import {addMyProfoile} from "./action/myProfile";
import {connect} from "react-redux";
const SignUpPage=(props)=>{
    return (
        <div>


        <div className="login_page">
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
    
         </div>
    

        </div>
    )
}
export default connect()(SignUpPage);
