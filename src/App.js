import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./Index/Index";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="wordpressVioleta/leonorvioleta">
          <Routes>
              <Route path="/" element={<Index/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
