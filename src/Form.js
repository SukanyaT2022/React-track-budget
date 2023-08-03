import { useState } from 'react';
import './Form.css';

const Form = () => {
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [date,setDate] = useState('');
    return (
        <form className='form_wrapper'>
            <label>Title</label>
            <input type='text' placeholder='Please eneter a title' value={title}/>
            <label>Price</label>
            <input type='number' placeholder='Please eneter a price' value={price}/><br/>
            <label>Date</label>
            <input type='date' value={date}/>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;