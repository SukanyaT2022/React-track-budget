import './Expense.css'

const Expense = (props) => {
   const data = props.onData[0];
  return (
    <div className="expense_wrapper">
        <div>
            <h1 className="title">{data.title}</h1>
            <div className="date">{data.date}</div>
        </div>
        <div>
            <span className="price">{data.price}</span>
        </div>
    </div>
  )
}

export default Expense