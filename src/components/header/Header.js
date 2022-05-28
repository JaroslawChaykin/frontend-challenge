import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <header className={'header'}>
          <div className={'container'}>
              <div className={'header-box'}>
                  <NavLink to={'/'}>Все котики</NavLink>
                  <NavLink to={'/favorite'}>Любимые котики</NavLink>
              </div>
          </div>
      </header>
    );
};

export default Header;