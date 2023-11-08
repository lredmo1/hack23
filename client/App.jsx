import React from 'react';
import { useState, useEffect } from 'react';
import './stylesheets/App.scss';

const App = () => {
  const [intro, updateIntro] = useState('insert text here');

//   useEffect(() => {
//     async function getIntro() {
//       try {
//         const response = await fetch('/api/hello');
//         const fetchedIntro = await response.json();
//         console.log(fetchedIntro);
//         updateIntro(fetchedIntro);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getIntro();
//   }, []);

  return (
    <div id='app'>
      <p>{intro}</p>
    </div>
  );
};

export default App;
