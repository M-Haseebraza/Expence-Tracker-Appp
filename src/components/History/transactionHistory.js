import React from 'react';
import './history.css'
export default function TranscationHist() {
    return (
        <div style={{display:'flex'}}>
        <button className='deletebtn'>
            X
        </button>
            <div className='transcHis' >
                <small>
                    Cash
             </small>
                <small className='cash'>
                    $100
             </small>

            </div>
    
            
        </div>
    )
}