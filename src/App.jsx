import { useState } from "react";
import './components/custom/OriginalTheme.css';
import './components/custom/Halloween.css';
import Hero from "./components/custom/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[url('/bg.jpg')] bg-cover min-h-screen">
      <Hero />
    </div>
  );
}

export default App;
