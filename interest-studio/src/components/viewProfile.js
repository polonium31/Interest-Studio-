import React from "react";
import {connect} from "react-redux";
import { setUniversityText } from "./action/filter";
import PeopleList from "./PeopleList";
import myProfile from "./reducers/myProfile";
const  ViewParticularInterest=(props)=>{
 const checkId=Number(props.match.params.id);
 const finalInterest=props.interests.filter((interest)=>interest.id === checkId);
 const university_text=props.filteres.university_text;
 const array=finalInterest[0];
 const intArray=array.peopleThatFollow.filter((int)=>{
  return int.university.includes(university_text)
})
return (
    <div>
     <h1>{finalInterest[0].name}</h1>
     <h2>{finalInterest[0].description}</h2>
     University Name:  <input type="text" placeholder="Find Your University " value={props.filteres.university_text}
      onChange={
        (e)=>{
          return{
            value:props.dispatch(setUniversityText(e.target.value))
          }
        }
      }
     />
     {
       intArray.map((people)=>{
             
           return (
                    <PeopleList people={people} key={people.id}/ >
                  )
       }
       )
     }
     
    </div>
)
}
const mapStateToProps=(state)=>{
   
  return {
    filteres:state.filters,
   interests:state.interests,
   myProfile:state.myProfile,
   

  }
}
export default connect(mapStateToProps)(ViewParticularInterest);