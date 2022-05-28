import { useDispatch, useSelector } from 'react-redux';
import { addCatToFavorite, removeCatFromFavorite } from '../../store/slices/favorite/FavoriteSlice';
import { memo, useEffect, useRef } from 'react';
import './catCard.css'

const CatCard = ({cat}) => {

    const dispatch = useDispatch()
    const {favorite} = useSelector(state => state.favorite)
    const catRef = useRef()

    const foundItem = favorite.find(item => item.id === cat.id)

    const catsToggle = () => {
        foundItem ? dispatch(removeCatFromFavorite(cat.id)) : dispatch(addCatToFavorite(cat))
    }

    useEffect(() => {
        if(foundItem) {
            catRef.current.classList.add('liked')
        } else {
            catRef.current.classList.remove('liked')
        }
    }, [favorite]);

    return (
      <div className={'cat-card'} >
          <img className={'cat-image'} src={cat.url} alt="1"/>
          <span className={'to-favorite'} ref={catRef} onClick={catsToggle}></span>
      </div>
    );
};

export default memo(CatCard);