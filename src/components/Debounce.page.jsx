import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function DebouncePage() {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [loading, setLoading] = useState(false);

  const debounced = useDebouncedCallback(() => {
    setDebouncedValue(()=>inputValue);
    console.log(debouncedValue)
    setLoading(false);
  }, 1000);

  const handleChange=(e)=>{
    if(e.target.value)setLoading(true);
    setInputValue(e.target.value);
    debounced();
  }

  return (
    <div style={{maxWidth:"500px",margin:"20px auto"}}>
      <h1>This is a Debounce function</h1>
      <input
        style={{width:"100%", padding:"10px", border:"1px solid #ccc", borderRadius:"4px", fontSize:"16px", margin:'20px 0'}}
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
      />
      <h3>{loading?'Loading...':debouncedValue}</h3>
    </div>
  );
}

export default DebouncePage
