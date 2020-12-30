import React from "react";
import Image_dance from "./dance.jpg";
import {NavLink} from "react-router-dom";
import Coading_Image from "./coading.jpg";
import Writing_Image from  "./writing.jpg";

const ExploreFields=()=>(
   <div>
   <NavLink to="/exploreInterests/dance" ><img src={Image_dance} alt="Dance Field" value="dance" id="dance"  /></NavLink> 
   <NavLink to="/exploreInterests/coading" ><img src={Coading_Image} alt="codeing_Field" value="coading" id="coading"  /></NavLink>  
   <NavLink to="/exploreInterests/writing" ><img src={Writing_Image} alt="writing_Field" value="writing" id="writing"  /></NavLink>  
   </div>
)

export default ExploreFields;