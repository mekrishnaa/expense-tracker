import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {

    if(props.expenses.length === 0){
            return <h2 className='expenses-list__fallback'>No Data Found</h2>
    }
    return(
        <ul className='expenses-list'>
                {
                    props.expenses.map((expense) => {
                        return <ExpenseItem key={expense.id} expanse={expense} />;
                    })
                }
        </ul>
    )
}

export default ExpensesList