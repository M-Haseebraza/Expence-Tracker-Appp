import React, { useContext, useRef, useState } from 'react';
import inputAmount from '../../contextApi';
import Amount from './amount';
import Description from './description';
import './transaction.css';

export default function Transaction() {
    let dataCheck =useContext(inputAmount);
    let [amount,changeAmount]=useState();
    let [desc,changeDesc]=useState()
    let ref1=useRef();
    let ref2=useRef();
    return (
        <div>
            <h4>
                Add Transaction
            </h4>
            <hr />
            <form action="#">
                <Amount/>
                <label>Add Amount
                </label>
                <input ref={ref1} onBlur={()=>{
                    changeAmount(ref1.current.value);
                }} type="text" placeholder="Enter Amount"/>
                <br />
                <br />
                <label>Add Description
                </label>
                <input ref={ref2} onBlur={()=>{
                    changeDesc(ref2.current.value);
                }} type="text" placeholder="Enter Description"/>
                <Description/>
                <button onClick={()=>{
                    dataCheck[0].push({
                        Amount:amount,
                        Description:desc
                    })
                    ref2.current.value=""
                    ref1.current.value=""
                    console.log(dataCheck);
                }} >ADD</button>
            </form>
        </div>
    )
}
