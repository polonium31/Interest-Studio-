import React from "react";
import {Link } from "react-router-dom";
const PeopleList=(props)=>{
   
    return (
        <div >
        <h3>---------------------------------------------------</h3>
        <Link to={`/profile/${props.people.id}`}><h3>Name : {props.people.name}</h3></Link>
        <h4>  University : {props.people.university}</h4>
        <h3>---------------------------------------------------</h3>
        </div>
    )
}
export default PeopleList;