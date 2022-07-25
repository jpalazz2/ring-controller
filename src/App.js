import { useState } from 'react';

import './App.css';
import IPEntryForm from './ui/IPEntryForm';
import logo from './logo.svg';

function App() {
  const [lightIP, setLightIP] = useState(null);

  if (lightIP == null) {
    return (
      <IPEntryForm />
    )
  }

  return (
    <div>Provided IP: {lightIP}</div>
  );
}

export default App;
