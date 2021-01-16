const defaultAuthenticationReducer={
    isvalid:false,
    isEditingPage:false
}
const authentication=(state=defaultAuthenticationReducer,action)=>{
  switch(action.type){
      case("VALIDATE_USER"):{
         return {
             ...state,
             isvalid:true
         }
      }
      case("INVALIDATE_USER"):{
          return {
              ...state,
              isvalid:false
          }
      }
      case("VALIDATE_EDITING"):{
          return {
             ...state,
             isEditingPage:true
          }
      }
      case("INVALIDATE_EDITING"):{
        return {
            ...state,
            isEditingPage:false
         }
      }
      default :{
          return state
      }
  }
}
export default authentication;