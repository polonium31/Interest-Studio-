import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import AppRouter from "./route/appRoute";
import reportWebVitals from './reportWebVitals';
import ConfigureStore from "./components/store/configureStore";
import {addperson} from "./components/action/person";
import {addPersonToInterest} from "./components/action/interest";
import { searchVisibleInterest } from './components/selectors/selectors';

const store=ConfigureStore();



const personOne=store.dispatch(addperson({id:"1",name:"Jainish",university:"indus",interests:[{
  
  field:"writing",
  name:"copywriting",
  description:"for creative people who love to put their thoughts on papper",
  peopleThatFollow:[]
}],
  project:[]
}));
const personTwo=store.dispatch(addperson({id:"2",name:"Dhruv",university:"iite",interests:[],
  project:[],
  contact:{
      email:"32453245@gmail.com",
      phone:9978518896
  }
}));
const personThree=store.dispatch(addperson({id:"3",name:"Aryan",university:"iim",interests:[],
  project:[]
}));
const PersonFour=store.dispatch(addperson({id:"4",name:"Mihir",university:"Nirma",interests:[],
  project:[],
  contact:{
      email:"32453245@gmail.com",
      phone:9978518896
  }
}));
store.dispatch(addPersonToInterest(11,{id:"1",name:"Jainish",university:"indus",interests:[ ],
project:[]
}))
store.dispatch(addPersonToInterest(11,{id:"3",name:"aryan",university:"iim",interests:[ ],
project:[]
}))
store.dispatch(addPersonToInterest(11,{id:"4",name:"mihir",university:"Nirma",interests:[ ],
project:[]
}))
store.dispatch(addPersonToInterest(12,{id:"1",name:"Jainish",university:"indus",interests:[],
project:[]
}))


store.subscribe(()=>{
  console.log(store.getState());
})
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
   <AppRouter/>
  </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
