// const interestOne={
//     id:11,
//     field:"dance",
//     name:"bharat Natiyam",
//     description:"A dance for People who are mainly interested in classical dance",
//     peopleThatFollow:[]
// }
// const defaultInterestState=[
    
//     interestOne, {
//          id:12,
//          field:"dance",
//          name:"garba",
//          description:"A dance for People who are mainly interested in classical dance",
//          peopleThatFollow:[]
//      }, {
//          id:13,
//          field:"dance",
//          name:"hip pop",
//          description:"A dance for People who are mainly interested in foreign dance",
//          peopleThatFollow:[]
//      },
//      {
//          id:14,
//          field:"coading",
//          name:"Python",
//          description:"A branch for people who is interested in DataScience and ai",
//          peopleThatFollow:[]
//      },
//      {
//          id:15,
//          field:"writing",
//          name:"copywriting",
//          description:"for creative people who love to put their thoughts on papper",
//          peopleThatFollow:[]
//      },
//      {
//         id:16,
//         field:"Music",
//         name:"classical",
//         description:"--------------",
//         peopleThatFollow:[]
//     }
 
//  ];
// const interestReducer=(state=defaultInterestState,action)=>{
//     switch(action.type){
//       case("ADD_PERSON_TO_INTEREST"):{
//          return  state.map((interest)=>{
//              if(interest.id===action.interestId){
//                  interest.peopleThatFollow=interest.peopleThatFollow.concat(action.person)
//              }
//               return interest
//           })
//       }  
//      case("REMOVE_PERSON_FROM_INTEREST"):{
//          return state.map((interest)=>{
//              if(interest.id===action.interestId){
//                  interest.peopleThatFollow=interest.peopleThatFollow.filter((person)=>person.id !== action.personId)
//              }
//              return interest;
//          })
//      } 
//         default: return state;
//     }
// }
// export default interestReducer;
const interestOne={
    id:11,
    field:"dance",
    name:"bharat Natiyam",
    description:"Bharatanatyam is the oldest classical dance tradition in India. A dance for People who are mainly interested in classical dance and classical music.",
    peopleThatFollow:[]
}
const defaultInterestState=[

    interestOne, {
         id:12,
         field:"dance",
         name:"Garba",
         description:"Garba is a form of dance which originates from the state of Gujarat in India. A dance form for People who are mainly interested in classical dance.",
         peopleThatFollow:[]
     },
     {
         id:13,
         field:"dance",
         name:"hip pop",
         description:"Hip-hop dance refers to street dance styles primarily performed to hip-hop music or that have evolved as part of hip-hop culture. A dance form for People who are mainly interested in foreign dance.",
         peopleThatFollow:[]
     },
     {
         id:14,
         field:"dance",
         name:"free style",
         description:"Freestyle dance, or dance improvisation, is the when you spontaneously make movement with your body. A dance form for People who are mainly interested in in all type of dance form.",
         peopleThatFollow:[]
     },

     {
         id:15,
         field:"coading",
         name:"Python/ Django",
         description:"Python is an interpreted, high-level and general-purpose programming language. A Language for people who are interested in Data Science and Machine Learning.",
         peopleThatFollow:[]
     },
     {
         id:16,
         field:"coading",
         name:"C++",
         description:"C++ gives programmers a high level of control over system resources and memory.A Language for people who are interested in Competitive programming.",
         peopleThatFollow:[]
     },
     {
         id:17,
         field:"coading",
         name:"Competitive programming",
         description:"Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. Contestants are referred to as sport programmers. Main contest Googe Kickstart, ICPC, Facebook Hacker book.",
         peopleThatFollow:[]
     },

     {
         id:18,
         field:"coading",
         name:"Python",
         description:"Python is an interpreted, high-level and general-purpose programming language. A Language for people who are interested in Data Science and Machine Learning.",
         peopleThatFollow:[]
     },
     {
         id:19,
         field:"coading",
         name:"Java/ Android DEV",
         description:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers.",
         peopleThatFollow:[]
     },
     {
         id:20,
         field:"writing",
         name:"copywriting",
         description:"for creative people who love to put their thoughts on papper",
         peopleThatFollow:[]
     },
     {
         id:21,
         field:"writing",
         name:"Narrative writing",
         description:"A narrative is a form of writing that tells a story. Narratives can be essays, fairy tales, movies, and jokes. Narratives have five elements: plot, setting, character, conflict, and theme.",
         peopleThatFollow:[]
     },

     {
         id:22,
         field:"writing",
         name:"Expository Writing",
         description:"Exposition is a type of oral or written discourse that is used to explain, describe, give information or inform. ",
         peopleThatFollow:[]
     },

     {
         id:23,
         field:"writing",
         name:"Argumentative Writing",
         description:"The argumentative essay is a genre of writing that requires the student to investigate a topic; collect, generate, and evaluate evidence; and establish a position on the topic in a concise manner.",
         peopleThatFollow:[]
     },

     {
        id:24,
        field:"Music",
        name:"Singing",
        description:"Singing is the act of producing musical sounds with the voice and augments regular speech by the use of sustained tonality, rhythm, and a variety of vocal techniques. A person who sings is called a singer or vocalist (in jazz and popular music).",
        peopleThatFollow:[]
    },

     {
        id:25,
        field:"Music",
        name:"Piano/ Electric Keyboard",
        description:"Playing Chords and songs.",
        peopleThatFollow:[]
    },
    {
       id:26,
       field:"Music",
       name:"Guitar",
       description:"Rhythm Guitar and Backing vocal.",
       peopleThatFollow:[]
   },
   {
      id:27,
      field:"Music",
      name:"Drums/ Octapad",
      description:"It give music of many kinds a sense of feeling. For example, to make a song to be slow or fast, the drums play slower or faster.",
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