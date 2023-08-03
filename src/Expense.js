import Form from './Form';
import './Expense.css';

const Expense = (props) => {
  const data = props.onData;
  return (
    <div>
      <Form/>                                                                                                            
      {data.map((item) => (
        <div key={item.id} className="expense_wrapper">
          <div>
            <h1 className="title">{item.title}</h1>
            <div className="date">{item.date}</div>
          </div>
          <div>
            <span className="price">{`$${item.price}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expense;
