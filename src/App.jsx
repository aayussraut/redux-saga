import { useNavigate } from "react-router-dom";
import "./App.css";
import Counter from "./component/Counter";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <Counter />
      <button onClick={() => navigate("/blogs")}>Blog</button>
    </>
  );
}

export default App;
