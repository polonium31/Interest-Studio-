import React from "react";
import PersonsInterestListItem from "../components/PersonsInterestListItem";
const PersonsInterestList =(props)=>{

    
    return props.interests.map((interest)=><PersonsInterestListItem key={interest.id} interest={interest} id={props.id}/>)
}
export default PersonsInterestList;