import CardSelecionado from "./Components/CardSelecionado";
import Inicio from "./Components/Inicio";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/card" element={ <CardSelecionado/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
