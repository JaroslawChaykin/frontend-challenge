import './catCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCatToFavorite, removeCatFromFavorite } from '../../store/slices/favorite/FavoriteSlice';

const CatCard = ({cat}) => {

    const dispatch = useDispatch()
    const {favorite} = useSelector(state => state.favorite)

    const addToFavorite = () => {
        const foundItem = favorite.find(item => item.id === cat.id)
        foundItem ? dispatch(removeCatFromFavorite(cat.id)) : dispatch(addCatToFavorite(cat))
    }

    return (
      <div className={'cat-card'}>
          <img className={'cat-image'} src={cat.url} alt="1"/>
          <span className={'to-favorite'} onClick={addToFavorite}></span>
      </div>
    );
};

export default CatCard;