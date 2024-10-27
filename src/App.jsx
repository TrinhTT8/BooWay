import { useState } from "react";
import Hero from "./components/custom/Hero";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[url('/bg.jpg')] bg-cover min-h-screen">
      <Hero />
    </div>
  );
}

export default App;
