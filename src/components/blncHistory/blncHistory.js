import React from 'react';
import Income from './income'
import Expence from './expence'
export default function BlncHistory(){
    return(
        <div style={{display:'flex',padding:'5px',margin:'5px',fontSize:'large',fontWeight:'bolder' }}>
        <Income/>
        <Expence/>

        </div>
    )
}