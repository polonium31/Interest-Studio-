import React from "react";
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import Header from "../components/header";
import ExploreFields from "../components/exploreFields";
import ExploreInterests from "../components/exploreInterest";
import Profile from "../components/Profile";
import EditProfile from "../components/editProfile";
import NotFoundPage from "../components/notFoundPage";
import ViewParticularInterest from "../components/viewProfile";
import LoginPage from "../components/loginPage";
import SignUpPage from "../components/SignUpPage";


const  AppRoute=()=>(
    <div>
     <BrowserRouter>
      <div>
        <Header/>
        <Switch>
         <Route exact path="/" component={ExploreFields}/>
         <Route path="/exploreInterests/:field" component={ExploreInterests}/>
         <Route path="/Profile/:id" component={Profile}/>
         <Route path="/editProfile" component={EditProfile}/>    
         <Route path="/viewProfile/:id" component={ViewParticularInterest}/>  
         <Route path="/login" component={LoginPage}/>
         <Route path="/signUp" component={SignUpPage}/>
         <Route component={NotFoundPage}/>
         </Switch>
      </div>
     </BrowserRouter>
    </div>
)
export default AppRoute;