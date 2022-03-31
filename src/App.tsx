import React from 'react';
import './App.css';
import Authentications from './views/components/authentications';
// import BarChart from './BarChart';
// import Dashboard from './views/components/dashboard';

function App() {
  return (
    <div className="App">
      {/* <BarChart top={10} right={50} bottom={50} left={50} width={1000} height={400} fill="tomato" /> */}
      {/* <Dashboard /> */}
      <Authentications />
    </div>
  );
}

export default App;
