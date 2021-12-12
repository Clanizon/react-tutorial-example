import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";
import CartExample from "./pages/CartExample";

function App() {
  const [count, setCount] = useState(0);
  //var count = 0;
  useEffect(() => {
    console.log("component loaded");
  }, []);

  return (
    <div className="App">
      <CartExample />
    </div>
  );
}

////setCount((count) => count + 1)
export default App;
