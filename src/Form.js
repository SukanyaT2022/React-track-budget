import { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState();
    const [date,setDate] = useState();

    const titleHandler = (e)=>{
        console.log(e.target.value)
     setTitle(e.target.value)   
    }
    const priceHandler = (e)=>{
        setPrice(e.target.value)   
    }
    const dateHandler = (e)=>{
        setDate(e.target.value)   
    }
//below function help to add whatever we fill in inputbox to show on the screen
//preventdefault id function not to reload the page
    const submitHandler = (e)=>{
        e.preventDefault();

        let obj = {
            title,
            price,
            date
        }
// Child-expense.js to parent forndata
        props.onFormData(obj);
    }
    return (
        <form className='form_wrapper' onSubmit={submitHandler}>
            <label>Title</label>
            <input 
                type='text' 
                placeholder='Please eneter a title' 
                value={title} 
                onChange={titleHandler}
            />
            <label>Price</label>
            <input 
                type='number' 
                placeholder='Please eneter a price' 
                value={price} 
                onChange={priceHandler}
            /><br/>
            <label>Date</label>
            <input 
                type='date' 
                value={date} 
                onChange={dateHandler}
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;