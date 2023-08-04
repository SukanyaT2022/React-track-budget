import React from 'react'
import Expense from './Expense'

const App = () => {
  const data = [
    {
      id:'e1',
      title:'Car service',
      date:'2023-5-6',
      price:150
    },
    {
      id:'e2',
      title:'Saloon',
      date:'2023-7-5',
      price:70
    }
  ]
  // const senddata2child =()=>{// }
  //function we made when we receive data from child
  return (
    <div>
      
      <Expense onData={data} />
      
    </div>
  )
}

export default App