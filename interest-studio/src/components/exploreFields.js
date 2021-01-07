import React from "react";
import Image_dance from "./dance.jpg";
import {NavLink} from "react-router-dom";
import Coding_Image from "./coding.jpg";
import Writing_Image from  "./writing.png";
import Music_Image from  "./music.jpg";

const ExploreFields=()=>(
   <div className="interests">

          <div className="field">
             <NavLink to="/exploreInterests/dance" ><img src={Image_dance} alt="Dance Field" value="dance" id="image"  /></NavLink>
          </div>

          <div className="field">
             <NavLink to="/exploreInterests/coading" ><img src={Coding_Image} alt="coding_Field" value="coding"id="image"  /></NavLink>
          </div>

          <div className="field">
             <NavLink to="/exploreInterests/writing" ><img src={Writing_Image} alt="writing_Field" value="writing" id="image"   /></NavLink>
          </div>
          <div className="field">
             <NavLink to="/exploreInterests/Music" ><img src={Music_Image} alt="Music Field" value="Music" id="image"   /></NavLink>
          </div>

   </div>
)

export default ExploreFields;
