 import React from "react";

const Contact =(props)=>{
    return (
    <div>
      {!!props.contact&&<h3>Phone :{props.contact} </h3>}
      {!!props.email&&<h3>Email :{props.email} </h3>}
    </div>
)

}
export default Contact;