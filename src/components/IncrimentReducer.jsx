import React, { useReducer } from 'react'


 const intialstate={count:10};

   const reducerfunction=(prvstate,action)=>{
           switch (action.type) {
            case "incriment" :
                return {...prvstate,count:prvstate.count+1};
                case "dicrement" :
                return {...prvstate,count:prvstate.count-1};
                case 'reset':
                    return {count:0};
            default:
                return prvstate;
           }
   }

const IncrimentReducer = () => {
    const [state, dispatch] = useReducer(reducerfunction, intialstate)
  return (
    <div>
        <p>{state.count}</p>
      <button onClick={()=>dispatch({type:"incriment"})}>incriment</button>
      <button onClick={()=>dispatch({type:"dicrement"})}>dicrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
} 

export default IncrimentReducer
