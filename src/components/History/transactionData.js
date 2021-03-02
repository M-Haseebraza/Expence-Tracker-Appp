import React from 'react';
// import inputAmount from '../../contextApi';
import './history.css'
export default function TransData(props) {
    return (<>
        <button className='deletebtn'>
            X
        </button>
        <div className={props.amount > 0 ? "transcHis" : "transcHis-minus"} >
            <small>
               {props.des}
            </small>
            <small className='cash'>
                ${props.amount}
            </small>
        </div>
        <hr/>
    </>)

}