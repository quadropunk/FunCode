import './App.css';
import GameLayout from './components/GameLayout/GameLayout';
import GameLayout2 from './components/GameLayout2/GameLayout';
import Tabs from './components/Tabs';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="level1" element={<GameLayout/>} />
          <Route path='level2' element={<GameLayout2/>} />
          <Route path="" element={<Tabs/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
