import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Index} from'./pages/onepirate/Home';

function App() {

  const [state, setState] = useState({jobs: [], isLoading: true});

  useEffect(()=>{
    // getData();
  }, []);
  
  const getData = async () =>{
    const url = 'http://78.141.200.183:8000/api/services';
    const res = await fetch(url);
    const json_data = await res.json();

    // .data is the array that contains the desired info.
    setState({jobs: json_data.data, isLoading: false});
  }

  return (
    <Index />
    // <div className="App">
    //   { 
    //     state.isLoading || !state.jobs.length ? 
    //     <p> data is loading.. </p> :
    //     <p>
    //       { /* homepage componet -> renders other components */
    //         state.jobs[0].name
    //       }
    //     </p>
    //   }
    // </div>
  );
}

export default App;
