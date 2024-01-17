import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';



function App() {
  const [interest,setinterest] = useState(0)
  const [Principle,setPrinciple] = useState(0)
  const [rate,setrate] = useState(0)
  const [year,setyear] = useState(0)
  const [isprinciple,setprinciple] = useState(true)
  const [israte,setisrate] = useState(true)
  const [isyear,setisyear] = useState(true)




const validate =(e)=>{
  const {name,value} = e.target
  // console.log(!!value.match(/^[0-9]+$/));

  if(!!value.match(/^[0-9]*.?[0-9]+$/)){
   if(name==='principle') {
      setPrinciple(value)
      setprinciple(true)
    }
    
  else if(name==='rate'){
    setrate(value)
    setisrate(true)
  }
  else
  {
    setyear(value)
    setisyear(true)

  }
}
  
  else{
    if(name==='principle') {
      setPrinciple(value)
      setprinciple(false)
    }
    else if(name==='rate'){
      setrate(value)
      setisrate(false)
    }
    else
  {
    setyear(value)
    setisyear(false)

  }
    


  }
}


const handlecalculate = (e)=>{
  e.preventDefault()
if(!Principle || !rate || !year){
 alert("Please fill the form")
}
else{
  setinterest(Principle*rate*year/100)
}

}

const handlereset =()=>{
  setinterest(0)
  setPrinciple(0)
  setrate(0)
  setyear(0)
  setprinciple(true)
  setisrate(true)
  setisyear(true)

}



  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
     
     <div style={{width:'400px'}} className='bg-light p-5 rounded'>
     <h1>Simple Interest App</h1>
     <p>Calculate your simple interest easily</p>

<div  style={{height:'150px'}} className='bg-warning mt-5 d-flex justify-content-center align-items-center w-100 rounded'>
<h1>₹{''}{interest}</h1>
 <p>Total Simple Interest</p>

</div>

<form className='mt-5' onSubmit={handlecalculate}>
  <div className='mb-3'>
  <TextField id="outlined-basic" name='principle' value={Principle ||''} onChange={(e)=>validate(e)} label="₹ Principle Amount" variant="outlined" />

  </div>
{
  !isprinciple &&
  <div>
    <p className='text-danger'>Invalid Input</p>
  </div>
}
  

  <div className='mb-3'>
  <TextField id="outlined-basic" name='rate' value={rate ||''} onChange={(e)=>validate(e)} label="Rate of interest(p.a)%"  variant="outlined" />

  </div>
{
 !israte &&
 <div>
   <p className='text-danger'>Invalid Input</p>
 </div>
}
 
  <div className='mb-3'>
  <TextField id="outlined-basic" name='year' label="Year" value={year ||'' }   onChange={(e)=>validate(e)} variant="outlined" />

  </div>
  {
 !isyear &&
 <div>
   <p className='text-danger'>Invalid Input</p>
 </div>
}

  <div className='mb-3'>
  <Stack direction="row" spacing={2}>
<Button type='submit' disabled={isprinciple && israte && isyear?false:true} variant="contained" className='bg-success'>Calculate</Button>
<Button variant="outlined" onClick={handlereset} className='bg-info'>Reset</Button>
</Stack>
  </div>
</form>

     </div>
     
    </div>
    
  );
}

export default App;
