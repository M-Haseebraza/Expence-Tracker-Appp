import React ,{useRef} from 'react';
import './transaction.css';
export default function Amount(){
   let myRef=useRef();
   return( <>
    <label>Add Amount</label>
    <input ref={myRef} type='text' placeholder='Enter Amount'/>
    <button>check</button>
    </>
   )
}