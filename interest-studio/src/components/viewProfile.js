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
 console.log("here");
 console.log(array);
 const intArray=array.peopleThatFollow.filter((int)=>{
  return int.university.includes(university_text)
})
return (
    <div className="particularInterest_container">
     <h1 className="particular_Interest_title">{finalInterest[0].name}</h1>
     <h2 className="particular_interest_description">{finalInterest[0].description}</h2>
    <div className="particular_interest_search">
    University Name:  <input type="text" placeholder="Find Your University " value={props.filteres.university_text}
    onChange={
      (e)=>{
        return{
          value:props.dispatch(setUniversityText(e.target.value.toUpperCase()))
        }
      }
    }
   />
    </div>
     <div className="particularInterest_followingPeoples_List">
      <div className="particularInterest_followingPeoples_List_title" ><h3>People that follow this list</h3></div>
      <div className="particularInterest_followingPeoples_List_list">
      {
        intArray.map((people)=>{
            
            return (
                     <PeopleList people={people} key={people.id}/ >
                   )
        }
        )
      }
      </div>
    
     </div>
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