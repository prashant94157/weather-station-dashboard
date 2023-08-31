import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingScreen from './screens/LandingScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
