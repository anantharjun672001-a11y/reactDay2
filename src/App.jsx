import React from 'react';
import Home from './components/Landing Page/Home';
import Head from './components/Landing Page/Head';
import Foot from './components/Landing Page/Foot'; 
import Child from './Props parent to child/Child';



const App = () => {
  let b = 20;
  return (
    <div>
      {/* <Header />
      <Home />
      <Footer /> */}
      <h1>Parent Component B value : {b}</h1>
      <Child b={b} />
    </div>
  );
};

export default App;

