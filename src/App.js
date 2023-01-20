import { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);


  return (
    <div className="App">
     <div style={styles.container} >
      <div>
        <h1 style={styles.counter} >Counter App</h1>
      </div>
      <div  >
        <h2 style={styles.count} >Count is {count}</h2>
        <div style={styles.buttonContainer}>
        <button
        style={styles.increment} 
        onClick={()=>setCount(count + 1)} >Incement</button>
        <button
        style={styles.decrement}
        onClick={()=>setCount(count - 1)}
        disabled={count === 0} >Decrement</button>
        <button
        style={styles.reset}
        onClick={()=>setCount(0)}
        disabled={count === 0} >reset</button>
        </div>
      </div>
     </div>
    </div>
  );
}

 const styles={
  container:{
    width:700,
    height:400,
    margin:'0px auto',
    border:'1px solid black',
    marginTop:50
  },
  counter:{
    fontSize:50,
    color:'green'
  },
  count:{
    fontSize:30
  },
  increment:{
    width:100,
    height:40,
    border:'none',
    backgroundColor:'green',
    color:'white',
    borderRadius:10,
    cursor:'pointer'
  },
  decrement:{
    width:100,
    height:40,
    border:'none',
    backgroundColor:'red',
    color:'white',
    borderRadius:10,
    cursor:'pointer'
  },
  reset:{
    width:100,
    height:40,
    border:'none',
    backgroundColor:'gray',
    color:'white',
    borderRadius:10,
    cursor:'pointer'
  },
  buttonContainer:{
    display:'flex',
    justifyContent:'space-evenly',
    textAlign:'center',
    alignItems:'center',
    padding:60,
  }
  
 }


export default App;
