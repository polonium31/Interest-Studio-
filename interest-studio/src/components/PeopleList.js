import React from "react";
import {Link } from "react-router-dom";
const PeopleList=(props)=>{
   
    console.log(props)
    return (
        <div className="people_list_container" >
         <div className="people_list_container_part1">
         <h1 key={props.people.name} className = "people_list_name">Name : {props.people.name}</h1>
         <h3 className = "people_list_university" key={props.people.university}>  University : {props.people.university}</h3>
         
         </div>
         <div className="people_list_container_part2">
         
         
        <Link style={{ textDecoration: 'none' }}  to={`/profile/${props.people.id}`}> <button id="vibutton"> Get Connected</button></Link>
        </div>
        </div>
    )
}
export default PeopleList;
