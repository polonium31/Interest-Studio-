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
            },
            password:""
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
    handlePasswordChange=(e)=>{
        const password=e.target.value;
        this.setState(()=>({
            password
        })
            
        )
    }
    onSubmit=(e)=>{

        e.preventDefault()
       this.props.onSubmit({
        name:this.state.name,
        university:this.state.university,
        interests:this.state.interests,
        contact:this.state.contact.phone,
        email:this.state.contact.email,
        project:this.state.projects,
        password:this.state.password}
        )

   }

   render(){

        return (
           <div>
            <form  onSubmit={this.onSubmit} className="profile">
             <input type="text" className="input_field" id="my_name" placeholder="Username" value={this.state.name} onChange={this.handleNameChange}/>

             <input type="text" className="input_field" id="my_university_text" placeholder="University Name" value={this.state.university} onChange={this.handleUniversityChange}/>
             <input type="text" className="input_field" id="my_project" placeholder="Your Projects" value={this.state.projects} onChange={this.handleProjectChange}/>

             <input type="password" className="input_field" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
             <input type="password" className="input_field" placeholder="Confirm Password"/>

             Contact Details
            <input type="text" id="my_email" className="input_field" placeholder="E mail" value={this.state.contact.email} onChange={this.handleEmailChange}/>
            <input type="number" className="input_field" placeholder="Contact Number" id="my_number"  value={this.state.contact.phone} onChange={this.handlePhoneChange}/>

             <button id="submit_profile">Create Profile</button>


             </form>
             <form  action="/signUp">
                  <button id="login" to="/signUp">Login</button>
              </form>

           </div>
       )
   }
}
export default ProfileForm;
