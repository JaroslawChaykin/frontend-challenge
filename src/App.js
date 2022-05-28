import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CatsGallery from './pages/CatsGallery';
import Favorite from './pages/Favorite';
import Header from './components/header/Header';
import './App.css';

function App() {
    return (
      <BrowserRouter>
          <Header/>
          <div className={'container'}>
              <Routes>
                  <Route path={'/'} element={<CatsGallery/>}/>
                  <Route path={'/favorite'} element={<Favorite/>}/>
                  <Route path={'*'} element={<Navigate to={'/'}/>}/>
              </Routes>
          </div>
      </BrowserRouter>
    );
}

export default App;
