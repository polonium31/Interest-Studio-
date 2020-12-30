const interestOne={
    id:11,
    field:"dance",
    name:"bharat Natiyam",
    description:"A dance for People who are mainly interested in classical dance",
    peopleThatFollow:[]
}
const defaultInterestState=[
    
    interestOne, {
         id:12,
         field:"dance",
         name:"garba",
         description:"A dance for People who are mainly interested in classical dance",
         peopleThatFollow:[]
     }, {
         id:13,
         field:"dance",
         name:"hip pop",
         description:"A dance for People who are mainly interested in foreign dance",
         peopleThatFollow:[]
     },
     {
         id:14,
         field:"coading",
         name:"Python",
         description:"A branch for people who is interested in DataScience and ai",
         peopleThatFollow:[]
     },
     {
         id:15,
         field:"writing",
         name:"copywriting",
         description:"for creative people who love to put their thoughts on papper",
         peopleThatFollow:[]
     }
 
 ];
const interestReducer=(state=defaultInterestState,action)=>{
    switch(action.type){
      case("ADD_PERSON_TO_INTEREST"):{
         return  state.map((interest)=>{
             if(interest.id===action.interestId){
                 interest.peopleThatFollow=interest.peopleThatFollow.concat(action.person)
             }
              return interest
          })
      }  
     case("REMOVE_PERSON_FROM_INTEREST"):{
         return state.map((interest)=>{
             if(interest.id===action.interestId){
                 interest.peopleThatFollow=interest.peopleThatFollow.filter((person)=>person.id !== action.personId)
             }
             return interest;
         })
     } 
        default: return state;
    }
}
export default interestReducer;