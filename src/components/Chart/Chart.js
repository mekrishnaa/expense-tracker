import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {

    const expenseAmount = props.items.map(item=>item.value);
    const maxExpense = Math.max(...expenseAmount);
    return (
        <div className="chart">
            {
                props.items.map((item)=>{
                   return <ChartBar key={item.label} value={item.value} maxValue={maxExpense} label={item.label} />
                })
            }
        </div>
    )


}

export default Chart