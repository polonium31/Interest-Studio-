import React from "react";
import {NavLink} from "react-router-dom";
import Coding_Image from "./field_icons/coding logo final.jpg";
import Writing_Image from  "./field_icons/copywriting logo final.jpg";
import Music_Image from  "./field_icons/music logo final.jpg";
import Image_dance from "./field_icons/dance logo final.jpg";

const ExploreFields=()=>(
   <div className="field_container">

          <div className="field">
             <NavLink to="/exploreInterests/dance" >
               <img src={Image_dance} alt="Dance Field" className="field_hover" value="dance" id="image" height="100%" width="100%" />
             </NavLink>
             <div className="content">
                <h3>Dance</h3>
             </div>
          </div>

          <div className="field">
             <NavLink to="/exploreInterests/coading" >
             <img src={Coding_Image} alt="coding_Field" className="field_hover" value="coding" id="image"  height="100%" width="100%"/>
             </NavLink>
             <div className="content">
                <h3>Coding</h3>
             </div>
          </div>

          <div className="field">
             <NavLink to="/exploreInterests/writing" >
             <img src={Writing_Image} className="field_hover" alt="writing_Field" value="writing" id="image"  height="100%" width="100%" />
             </NavLink>
             <div className="content">
             <h3>Writing</h3>
          </div>
          </div>
          <div className="field">
             <NavLink to="/exploreInterests/Music" >
             <img src={Music_Image} alt="Music Field" className="field_hover" value="Music" id="image"  height="100%" width="100%" />
             </NavLink>
             <div className="content">
             <h3>Music</h3>
          </div>
          </div>

   </div>
)

export default ExploreFields;
