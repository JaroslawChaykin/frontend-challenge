import './App.css';
import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import CatsGallery from './pages/CatsGallery';
import Favorite from './pages/Favorite';

function App() {
  return (
    <BrowserRouter>
        <header>
            <NavLink to={'/'}>Все котики</NavLink>
            <NavLink to={'/favorite'}>Любимые котики</NavLink>
        </header>
        <Routes>
            <Route path={'/'} element={<CatsGallery/>}/>
            <Route path={'/favorite'} element={<Favorite/>}/>
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
