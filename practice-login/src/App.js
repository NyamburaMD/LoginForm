import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/Routes/Routes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
