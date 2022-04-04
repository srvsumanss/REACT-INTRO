import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
// import { Routes, Route} from 'react-router-dom';
import { Routes1 } from "./Components/Routes";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes> */}
      <Routes1 />
    </div>
  );
}

export default App;
