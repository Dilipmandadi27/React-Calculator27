import React from 'react'
import '../App.css'
import Button from './Button'

const Container = ({validateAndCalculate,error,result, input1,input2,setInput1,setInput2,success,resetbtn}) => {

  return (
    <div className="main">
    <div  className='Container'>
     <div className='content-container'>
     <h1>React Calculator</h1>
      
        <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} placeholder='Num 1' />
     <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} placeholder='Num 2' />
     

      <div className="btns">

              
            <button onClick={() => validateAndCalculate('addition')}>+</button>
            <button onClick={() => validateAndCalculate('subtraction')}>-</button>
            <button onClick={() => validateAndCalculate('multiplication')}>*</button>
            <button onClick={() => validateAndCalculate('division')}>/</button>
          
      </div>

      {error && <div className='error' style={{ color: 'red'}}>{error}</div>}
           {success && <div  className='success' style={{ color: 'green' }}>{success}
           { result !==null && <div> Result: {result}</div>}
            </div>}
        


     </div>
    </div>
    <Button resetbtn={resetbtn}/>
    </div>

  )
}

export default Container
