import React from 'react';
import './transaction.css';
import Amount from './amount'
import Description from "./description"
export default function Transaction() {
    return (
        <div>
            <h4>
                Add Transaction
            </h4>
            <hr />
            <form>
                <Amount />
                <br/>
                <br/>
                <Description />
                <button>ADD</button>
            </form>
        </div>
    )
}
