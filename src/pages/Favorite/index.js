import { useSelector } from 'react-redux';
import CatCard from '../../components/catCard/CatCard';
import './Favorite.css'

const Favorite = () => {
    const {favorite} = useSelector(state => state.favorite)
    return (
      <div className={'favorite'}>
          {
              favorite.map(cat => <CatCard cat={cat}/>)
          }
      </div>
    );
};

export default Favorite;