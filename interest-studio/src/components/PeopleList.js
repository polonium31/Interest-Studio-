import React from "react";
import {Link } from "react-router-dom";
const PeopleList=(props)=>{

    return (
        <div className="people_list">
        <Link style={{ textDecoration: 'none' }} className = "name"to={`/profile/${props.people.id}`}><h3>Name : {props.people.name}</h3></Link>
        <h4 className = "university">  University : {props.people.university}</h4>

        </div>
    )
}
export default PeopleList;
