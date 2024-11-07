import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-10">  
      <Counter start={10} step={2} danger/>
      <Counter step={12}/>
      <Counter start="20" step={2}/>
    </main>
  );
}

export default App;