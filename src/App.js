
import './App.css';
import Header from './Header';
import { fetchData } from './api';
import { useEffect, useState } from 'react';
import Character from './Character';
function App() {
  const [text,setText]=useState("");
  const [data,setData]=useState([]);
  useEffect(() => {
    const getData=async()=>{
  const result=await fetchData(text);
  setData(result.data);
  console.log(result);
    }
    getData();
  }, [text]);

  const getText=(text)=>{
    setText(text);
    console.log(text);
  }
  return (
    <div className="App">
     {/* <h1>hello</h1> */}
     <Header getText={getText} />
     <Character data={data} />
    </div>
  );
}

export default App;
