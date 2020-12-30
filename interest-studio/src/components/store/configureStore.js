import {createStore,combineReducers} from "redux";
import personReducer from "../reducers/personReducer";
import interestReducer from "../reducers/interestReducer";
import filterReducer from "../reducers/filterReducer";
import myProfileReducer from "../reducers/myProfile";
export default ()=>{
    const store=createStore(
        combineReducers({
            person:personReducer,
            interests:interestReducer,
            filters:filterReducer,
            myProfile:myProfileReducer
        })
    )
    return store;
}
