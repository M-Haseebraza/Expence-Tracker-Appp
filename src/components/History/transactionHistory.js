import React , {useContext} from  'react';
import inputAmount from '../../contextApi';
import './history.css'
export default function TranscationHist() {
    let transData=useContext(inputAmount)
    console.log(transData);
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
             </small>

            </div>     
       </div>
    )
}