import React from 'react';
import './css/variables.css';
import './css/main.css';
import Header from './components/Header';
import { SpeechProvider } from '@speechly/react-client';
import SpeechlyApp from './components/SpeechlyApp';

function App() {
  return (
    <main className="App">
      <Header />
      <SpeechProvider appId={process.env.REACT_APP_APP_ID} language="en-US">
        <SpeechlyApp />
      </SpeechProvider>
    </main>
  );
}

export default App;
