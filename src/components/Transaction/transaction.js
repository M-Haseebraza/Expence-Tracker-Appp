import React from 'react';
import './transaction.css';
export default function Transaction() {
    return (
        <div>
            <h4>
                Add Transaction
            </h4>
            <hr />
            <form action="#">
                <label>Add Amount</label>
                <input type='text' placeholder='Enter Amount' />
                <br />
                <br />
                <label>Add Description</label>
                <input type='text' placeholder='Enter description' />
                <button >ADD</button>
            </form>
        </div>
    )
}
