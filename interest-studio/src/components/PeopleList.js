import React from "react";
import {Link } from "react-router-dom";
const PeopleList=(props)=>{
   
    console.log(props)
    return (
        <div className="people_list" >
        <Link style={{ textDecoration: 'none' }} className = "name" to={`/profile/${props.people.id}`}><h3 key={props.people.name}>Name : {props.people.name}</h3></Link>
        <h4 className = "university" key={props.people.university}>  University : {props.people.university}</h4>

        </div>
    )
}
export default PeopleList;
