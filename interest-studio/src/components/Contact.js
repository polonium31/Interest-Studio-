 import React from "react";

const Contact =(props)=>{
    return (
    <div>
      {!!props.contact.phone&&<h3>Phone :{props.contact.phone} </h3>}
      {!!props.contact.email&&<h3>Email :{props.contact.email} </h3>}
    </div>
)

}
export default Contact;