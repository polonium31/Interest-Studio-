import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import { Redirect } from "react-router-dom";
import {addMyProfoile} from "../components/action/myProfile"






 class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userName:"",
      password:"",
      error:"",
      id:""
    }
  } 
  handleUserNameChange=(e)=>{
    const userName=e.target.value;
    console.log(this.state)
    this.setState(()=>({
      userName
  }))
  }
  handlePasswordChange=(e)=>{
    const password=e.target.value;
    console.log(this.state)
    this.setState(()=>({
      password
  }))
  }
   handleSubmit=(e)=>{
    e.preventDefault();
    let flaguser=false;
    let flagpass=false;
    this.props.person.map((profile)=>{
      if(profile.name === this.state.userName){
        flaguser=true;
        
        if(profile.password === this.state.password){
          flagpass=true;
          this.props.dispatch(addMyProfoile(profile));
          this.setState(()=>({
            error:"valid",
            id:profile.id
          }))
        }
        else this.setState(()=>{
          flagpass=false;
          return {
            error:"Incorrect Password"
          }
        })
      }
    })
    
     if(flaguser === false){
       this.setState(()=>({
         error:"invalid user"
       }))
     }
   }
  render(){
     return (
      <div>
       <h1>Welcome To InterestStudio </h1>
       <form  onSubmit={this.handleSubmit}>
       UserName: <input type="text" placeholder="UserName" value={this.state.userName} onChange={this.handleUserNameChange}/>
       Password: <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
       <button>LogIn</button>
       </form>
       {!!this.state.error && <div>
        <h3>{this.state.error}</h3>
       </div>}
       {this.state.error === "valid" && <Redirect to={"/"} />}
       <div>
         <h2> New User?</h2>
         <NavLink  style={{ textDecoration: 'none' }} className="links"to="/signUp">Sign In/Sign Up</NavLink>
      </div>
      </div>
        )
   }
 }   
 const mapStateToProps=(state)=>{
  console.log(state)
  return {
   person:state.person,
  }
}
export default connect(mapStateToProps)(LoginPage);
