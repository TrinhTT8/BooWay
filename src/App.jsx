import React, { useEffect, useState } from 'react';
import './components/custom/OriginalTheme.css';
import Hero from "./components/custom/Hero";

function App() {
  const [theme, setTheme] = useState('original'); // toggle theme
  
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover min-h-screen">
      <Hero />
    </div>
  );
}

export default App;
