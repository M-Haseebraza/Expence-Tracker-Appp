import React, { createContext } from 'react';
import Description from './components/Transaction/description';

let inputData={
    Amount:'',
    Desc:''
 }
let inputAmount= createContext(inputData);
export default inputAmount;