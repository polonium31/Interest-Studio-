
import {connect} from "react-redux";
import React from "react";
import {Link, Redirect } from "react-router-dom";
import PersonsInterestList from "./PersonsInterestList"
import {removePersonFromInterest} from "./action/interest";
import { removeInterest } from "./action/person";
import myProfile from "./reducers/myProfile";


const PersonsInterestListItem=(props)=>{
     const isProfile=props.myProfile[0].id === props.id;
     
     return (
        <div className="personsinterest">
          <h2 className="personsinterest_title">{props.interest.name}</h2>
         <h3 className="personsinterest_description">{props.interest.description}</h3>
         <div className="personsinyterest_buttons">
         <Link to={`/viewProfile/${props.interest.id}`}><button id="vibutton">View Profile</button></Link>
         {isProfile&&<button onClick={()=>{
           props.dispatch(removeInterest(props.myProfile[0].id,props.interest.id))
           props.dispatch(removePersonFromInterest(props.myProfile[0].id,props.interest.id))
         }}>Unfollow Interest</button>}
         
         </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    console.log(state)
    return {
        myProfile:state.myProfile
    }
}
export default connect(mapStateToProps)(PersonsInterestListItem)