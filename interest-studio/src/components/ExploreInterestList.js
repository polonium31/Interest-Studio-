import React from "react";
import {Link} from "react-router-dom";
import {addInterest} from "./action/person";
import {connect} from "react-redux";
import { addPersonToInterest } from "./action/interest";
 class  ExploreInterestList extends React.Component{
   constructor(props){
     super(props);
     this.state={
       isDisabled:false
     }
   }
  render(){
      return (
      <div className = "single_interest_container" >
      <div className="interest_intro_container">
      <h1 className = "interest_name">{this.props.interest.name}</h1>
      <h3 className="interest_description">{this.props.interest.description}</h3>
      </div>
        <div className="interest_button_container">
        <div className="interest_viewProfile_button">
        <Link  style={{ textDecoration: 'none' }} to={`/viewProfile/${this.props.interest.id}`}><button id="vibutton">View Profile</button></Link>
        </div>
       <div className="interest_follow_button">
       <button id="vibutton"  disabled={this.state.isDisabled} onClick={
        ()=>{
        this.props.dispatch(addInterest(this.props.interest,this.props.myProfile[0].id))
        this.props.dispatch(addPersonToInterest(this.props.interest.id,this.props.myProfile[0]))
        this.setState(()=>{
          return {
            isDisabled:true
          }
        })
      
      }}>Follow Interest</button>
       </div>
        </div>
  
      </div>
  )
   }
 }
// const ExploreInterestList =(props)=>{
  
//   return (
//     <div className = "single_interest_container" >
//     <div className="interest_intro_container">
//     <h1 className = "interest_name">{props.interest.name}</h1>
//     <h3 className="interest_description">{props.interest.description}</h3>
//     </div>
//       <div className="interest_button_container">
//       <div className="interest_viewProfile_button">
//       <Link  style={{ textDecoration: 'none' }} to={`/viewProfile/${props.interest.id}`}><button id="vibutton">View Profile</button></Link>
//       </div>
//      <div className="interest_follow_button">
//      <button id="vibutton"  disabled={isDisabled} onClick={
//       ()=>{
//       props.dispatch(addInterest(props.interest,props.myProfile[0].id))
//       props.dispatch(addPersonToInterest(props.interest.id,props.myProfile[0]))
      
    
//     }}>Follow Interest</button>
//      </div>
//       </div>

//     </div>
// )
// }
export default connect()(ExploreInterestList);
