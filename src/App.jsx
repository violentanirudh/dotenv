import './resources/css/style.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import ComingSoon from './Pages/ComingSoonPage';
import AboutPage from './Pages/AboutPage';
import TeamPage from './Pages/TeamPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/events" element={<ComingSoon />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog" element={<ComingSoon />} />
        <Route path="/stats" element={<ComingSoon />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/join" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;