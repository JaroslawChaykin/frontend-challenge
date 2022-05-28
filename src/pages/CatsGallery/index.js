import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../../store/slices/catsGallery/actions';
import './catsGallery.css'

const CatsGallery = () => {
    const {cats, loading, error} = useSelector(state => state.cats)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCats({limit: 10}))
    }, []);

    if(loading) return <h1>loading...</h1>
    if(error) return <h1>{error}</h1>

    return (
      <div>
          {
              cats.map(item => <img src={item.url} alt=""/>)
          }
      </div>
    );
};

export default CatsGallery;