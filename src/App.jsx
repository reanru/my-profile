import { Route, Routes } from "react-router";

import './App.css';

import Layout from "./layout/views/index";
import MainModule from "./moduls/mainModule/views/index";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/*" element={<MainModule />} />
      </Routes>
    </>
  )
}

export default App
