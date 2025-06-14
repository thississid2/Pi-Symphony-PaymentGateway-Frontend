import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pay from './pages/Pay';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pay" element={<Pay />} />
    </Routes>
  );
};

export default App;
