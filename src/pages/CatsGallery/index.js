import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../../store/slices/catsGallery/actions';
import CatCard from '../../components/catCard/CatCard';
import './catsGallery.css'
import Loader from '../../ui/Loader/Loader';

const CatsGallery = () => {
    const {cats, loading, error} = useSelector(state => state.cats)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCats({limit: 10}))
    }, []);

    if(loading) return <Loader />
    if(error) return <h1>{error}</h1>

    return (
      <div className={'cats-gallery'}>
          {
              cats.map(item => <CatCard key={item.id} cat={item}/>)
          }
      </div>
    );
};

export default CatsGallery;