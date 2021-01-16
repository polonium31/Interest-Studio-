import React from "react";
import {connect} from "react-redux";
import {getVisibleinterests, searchVisibleInterest} from "./selectors/selectors";
import ExportInterestList from "./ExploreInterestList";
import {setInterestText} from "./action/filter";

const ExploreInterests=(props)=>{
   const field=props.match.params.field;
   let interests=getVisibleinterests(props.interests,field);
  const filter_text=props.filters.interest_text;
  const intArray=interests.filter((int)=>{
    return int.name.includes(filter_text)
  })

  return <div className="interest_container">
        <div className="searc_interest">
        Search Ineterst : <input type="text" className="search_interest_box" placeholder="Search Interest" value={props.filters.interest_text} onChange={(e)=>{
          return {
            value:props.dispatch(setInterestText(e.target.value.toUpperCase()))
   
          }
       }}/>
        </div>
    <div className="interest_list_container">
    {intArray.map((int)=>(
      <div key={int.id} className="interest">
      <ExportInterestList key={int.id} interest={int} myProfile={props.myProfile}/>
      </div>
    ))}
    </div>
   </div>
  }
// }
// class ExploreInterests extends React.Component{
//   constructor(props){
//     const field=props.match.params.field
//     super(props);
//     this.state={
//       interests:getVisibleinterests(this.props.interests,field)
//     }
//   }
//   render(){
//     return
// }
const mapStateToProps=(state)=>{
  return {
       interests:state.interests,
       myProfile:state.myProfile,
       filters:state.filters
  }
}
export default connect(mapStateToProps)(ExploreInterests);
