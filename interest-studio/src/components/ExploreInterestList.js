import React from "react";
import {Link} from "react-router-dom";
import {addInterest} from "./action/person";
import {connect} from "react-redux";
import { addPersonToInterest } from "./action/interest";
const ExploreInterestList =(props)=>{
   
  return (
    <div>
      <Link to={`/viewProfile/${props.interest.id}`}><h3>{props.interest.name}</h3></Link>
      <button onClick={
        ()=>{
        props.dispatch(addInterest(props.interest,props.myProfile[0].id))
        props.dispatch(addPersonToInterest(props.interest.id,props.myProfile[0]))      
      }}>Follow Interest</button>
      <h6>{props.interest.description}</h6>
    </div>
)
}
export default connect()(ExploreInterestList);