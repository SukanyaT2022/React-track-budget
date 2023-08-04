import Form from './Form';
import './Expense.css';
import { useState } from 'react';

const Expense = (props) => {
  const [data, setData] = useState(props.onData);

  const formData = (obj) => {
    //...give previous cply old value andmeerge wth new new object
    setData((prevData) => [...prevData, obj]);
  };
  return (
    <div>
      {/* //form.ja */}
      <Form onFormData={formData} />
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
