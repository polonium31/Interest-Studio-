// import React from "react";
// import {connect} from "react-redux";
// import {NavLink} from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import {addMyProfoile} from "../components/action/myProfile"
// import {validateuser} from "./action/authentaction";





//  class LoginPage extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       userName:"",
//       password:"",
//       error:"",
//       id:""
//     }
//   } 
//   handleUserNameChange=(e)=>{
//     const userName=e.target.value;
//     console.log(this.state)
//     this.setState(()=>({
//       userName
//   }))
//   }
//   handlePasswordChange=(e)=>{
//     const password=e.target.value;
//     console.log(this.state)
//     this.setState(()=>({
//       password
//   }))
//   }
//    handleSubmit=(e)=>{
//     e.preventDefault();
//     let flaguser=false;
//     let flagpass=false;
//     this.props.person.map((profile)=>{
//       if(profile.name === this.state.userName){
//         flaguser=true;
        
//         if(profile.password === this.state.password){
//           flagpass=true;
//           this.props.dispatch(addMyProfoile(profile));
//           this.props.dispatch(validateuser())
//           this.setState(()=>({
//             error:"valid",
//             id:profile.id
//           }))
//         }
//         else this.setState(()=>{
//           flagpass=false;
//           return {
//             error:"Incorrect Password"
//           }
//         })
//       }
//     })
    
//      if(flaguser === false){
//        this.setState(()=>({
//          error:"invalid user"
//        }))
//      }
//    }
//   render(){
//      return (
//       <div>
//        <h1>Welcome To InterestStudio </h1>
//        <form  onSubmit={this.handleSubmit}>
//        UserName: <input type="text" placeholder="UserName" value={this.state.userName} onChange={this.handleUserNameChange}/>
//        Password: <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
//        <button>LogIn</button>
//        </form>
//        {!!this.state.error && <div>
//         <h3>{this.state.error}</h3>
//        </div>}
//        {this.state.error === "valid" && <Redirect to={"/"} />}
//        <div>
//          <h2> New User?</h2>
//          <NavLink  style={{ textDecoration: 'none' }} className="links"to="/signUp">Sign In/Sign Up</NavLink>
//       </div>
//       </div>
//         )
//    }
//  }   
//  const mapStateToProps=(state)=>{
//   console.log(state)
//   return {
//    person:state.person,
//   }
// }
// export default connect(mapStateToProps)(LoginPage);
import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import { Redirect } from "react-router-dom";
import {addMyProfoile} from "../components/action/myProfile"
import {validateuser} from "./action/authentaction";
import intlogo from "../components/interest studio.jpg"
<script src="https://kit.fontawesome.com/yourcode.js"></script>
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
          this.props.dispatch(validateuser())
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
      <div class = "loginbox"> 
      <div class="logo">
      <img src= {intlogo}></img>
      <div class="icon"> 
      <div class ="contact">
      <p> You Can Contact Us On:::</p>
      </div>
     
      <ul>
        <li><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></li>
        <li><i class="fa fa-envelope fa-lg" aria-hidden="true"></i></li>
        <li><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></li>
        <li><i class="fa fa-phone fa-lg" aria-hidden="true"></i></li>
        <li><i class="fa fa-github-square fa-lg" aria-hidden="true"></i></li>
        <li><i class="fa fa-facebook-official fa-lg" aria-hidden="true"></i></li>
        <li><i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></li>
        </ul>
      </div>
      </div>
      <div class="loginForm">
      <h1>Welcome To InterestStudio </h1>
      <div class="loginforminput">
      <form  onSubmit={this.handleSubmit}>
       <div class="textbox"> 
       <i class="fa fa-user" aria-hidden="true"></i>
       <input type="text" placeholder="UserName" value={this.state.userName} onChange={this.handleUserNameChange}/></div>
       <br></br>
       <div class="textbox">
       <i class="fa fa-lock" aria-hidden="true"></i>
        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/></div>
       <br></br>
       
       <button id='loginbtn'>Login</button>
       </form>
       {!!this.state.error && <div class = "error">
        <h3>{this.state.error}</h3>
       </div>}
       {this.state.error === "valid" && <Redirect to={"/"} />}
      </div>
      <div class="newuser">
         <h2> New User?</h2>
         <div class="signuplink"><NavLink  style={{ textDecoration: 'none' }} className="links"to="/signUp">Sign Up</NavLink></div>
      </div>
      
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
