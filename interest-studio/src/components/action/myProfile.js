import {v4 as uuidv4} from "uuid";
export const addMyProfoile = ({id,name,university,interests,contact,email,project}={})=>({
    type:"ADD_MY_PROFILE",
    myProfile:{
        id:id,
        name,
        university,
        interests,
        contact,
        email,
        project
    }
   })
   