import {useState} from "react";


function App() {

  const [form,setForm]=useState({
    amount:0,
    description:'',
    date:""
  })
  async function handleSubmit(e){
      e.preventDefault();
      const res=await fetch('http://localhost:8080/transaction',{
            method: "POST",
            body:form,
      });
      console.log(res);
  }
  function handleInput(e){
      console.log(e.target.value);
      setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    <div >
        <form onSubmit={handleSubmit}>
          <input 
            type="number"
            onChange={handleInput}
            value={form.amount}
            name="amount"
            placeholder="enter amount"
            />
          <input
            type="text"
            placeholder="enter the detail"
            onChange={handleInput}
            value={form.description}
            name="description"
          />
          <input type="date"
          onChange={handleInput}
          value={form.date}
          name="date"
          />
          <button>submit</button>
        </form>
    </div>
  );
}

export default App;
