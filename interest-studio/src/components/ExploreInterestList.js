import React from "react";
import {Link} from "react-router-dom";
import {addInterest} from "./action/person";
import {connect} from "react-redux";
import { addPersonToInterest } from "./action/interest";
const ExploreInterestList =(props)=>{

  return (
    <div className = "single_interest_container" >
    <div className="interest_intro_container">
    <h3 className = "interest_name">{props.interest.name}</h3>
    <h6 className="interest_description">{props.interest.description}</h6>
    </div>
      <div className="interest_button_container">
      <div className="interest_viewProfile_button">
      <Link  style={{ textDecoration: 'none' }} to={`/viewProfile/${props.interest.id}`}><button id="vibutton">View Profile</button></Link>
      </div>
     <div className="interest_follow_button">
     <button id="vibutton"  onClick={
      ()=>{
      props.dispatch(addInterest(props.interest,props.myProfile[0].id))
      props.dispatch(addPersonToInterest(props.interest.id,props.myProfile[0]))
    }}>Follow Interest</button>
     </div>
      </div>

    </div>
)
}
export default connect()(ExploreInterestList);
