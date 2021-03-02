import React, { useContext } from 'react';
import inputAmount from '../../contextApi';
import './history.css'
import TransData from './transactionData'
export default function TranscationHist() {
    let transData = useContext(inputAmount)
    return (
        <div style={{ display: '' }}>  
            {transData[0].map((a,index) => {
                return (
             <TransData key={index} des={a.Description} amount={a.Amount}></TransData>)
            })}
        </div>
    )
}