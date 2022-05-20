import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Playlist from './components/Playlist/Playlist';
import { AudioProvider } from './Contexts/AudioContext';

function App() {
  return (
    <AudioProvider>
      <div className="App">
        <Header />
        <Playlist />
      </div>
    </AudioProvider>
  )
}

export default App;
