import React from "react";
class ProfileForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            university:"",
            interests:[],
            projects:"",
            contact:{
                email:"",
                phone:""
            }
        }
    }
    handleNameChange=(e)=>{
       const name=e.target.value 
       this.setState(()=>({
           name
       }))
    }
    handleUniversityChange=(e)=>{
        const university =e.target.value;
        this.setState(()=>({
            university
        }))
    }
    handleProjectChange=(e)=>{
        const projects=e.target.value
        this.setState(()=>({
           projects
       }))
    }
    handleEmailChange=(e)=>{
        const email=e.target.value;
        this.setState((state)=>{
            return {
                contact:{...state.contact,email:email}
            }
        }
        )
    }
    handlePhoneChange=(e)=>{
       const phone=e.target.value;
       this.setState((state)=>{
           return {
               contact:{...state.contact,phone:phone}
           }
       })
    }
    onSubmit=(e)=>{
       
        e.preventDefault()
       this.props.onSubmit({
        name:this.state.name,
        university:this.state.university,
        interests:this.state.interests,
        contact:this.state.contact.phone,
        email:this.state.contact.email,
        project:this.state.projects})
       
   }
  
   render(){
        
        return (
           <div>
            <form  onSubmit={this.onSubmit}>
             Name:<input type="text"  id="my_name" placeholder="Your Name" value={this.state.name} onChange={this.handleNameChange}/>

             University : <input type="text" id="my_university_text" placeholder="Your University" value={this.state.university} onChange={this.handleUniversityChange}/>
             projects:<input type="text" id="my_project" placeholder="Your Project" value={this.state.projects} onChange={this.handleProjectChange}/>
             contact detaild
             email<input type="text" id="my_email" placeholder="E mail" value={this.state.contact.email} onChange={this.handleEmailChange}/>
             contact Number : <input type="number" placeholder="phone" id="my_number"  value={this.state.contact.phone} onChange={this.handlePhoneChange}/>
             <button>Submit Profile</button>
             </form>
           
           </div>
       )
   }
}
export default ProfileForm; 