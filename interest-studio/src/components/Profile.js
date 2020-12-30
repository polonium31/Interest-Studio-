import React from "react";
import {connect} from "react-redux";
import Contact from "../components/Contact";
import PersonsInterestList from "../components/PersonsInterestList";
import {removePerson} from "../components/action/person";
const Profile=(props)=>{ 
 
   const person =props.peoples.filter((people)=>{
     return people.id===props.match.params.id
   });
  
   const pid=props.myProfile.length === 0 ?"": props.myProfile[0].id;
   const isProfile= pid === props.match.params.id;
  

    
   return (
    <div>
      {isProfile && <button onClick={()=>{
         props.dispatch(removePerson(pid))
         props.history.push("/signUp")
      }}>Delete Account</button>}
       {person.length !== 0 && (
         <div>
         <h1>Name : {person[0].name}</h1>
       <h2>University : {person[0].university}</h2>
       <h2>Contact : {!person[0].contact?"no contact to show":<Contact contact={person[0].contact}/>}</h2>
       <h3>Interest : {person[0].interests.length ===0?"No interest is stilll subscribe":<PersonsInterestList interests={person[0].interests} id={props.match.params.id}/>}</h3>
         </div>
       ) }
    </div>
)
}
const mapStateToProp=(state)=>{
  
  return {
    peoples:state.person,
    myProfile:state.myProfile
  }
}
export default connect(mapStateToProp)(Profile);