import React from "react";
const defaultProfile=[]
const myProfile=(state=defaultProfile,action)=>{
    switch(action.type){
        case("ADD_MY_PROFILE"):{
            return [
                ...state,
                action.myProfile
            ]
        }
        default :
         return state
    }
}
export default myProfile;