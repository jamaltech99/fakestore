import React from 'react'
import { useState } from 'react'

function Counter() {

    const [counter,setCounter] =useState(0);

    const add=()=>{
      if(counter===15){
       alert('Stock reach for single customer ')
      }
      else{
        setCounter(counter+1);
      }
       
    };

    const remove=()=>{
      if(counter===0){
      }
      else{
        setCounter(counter-1);
      }
       
    };







  return (
    <div className='m-5 d-flex counter'>
        <button className='btn btn-dark p-2 m-2' onClick={add}>Add</button>
        <h1>{counter}</h1>
        <button className='btn btn-dark p-2 m-2' onClick={remove}>Remove</button>
    </div>
  )
}

export default Counter