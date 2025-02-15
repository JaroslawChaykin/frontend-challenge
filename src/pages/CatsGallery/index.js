import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../../store/slices/catsGallery/actions';
import CatCard from '../../components/catCard/CatCard';
import Loader from '../../ui/Loader/Loader';
import { throttle } from '../../utils/throttle';
import './catsGallery.css';

const CatsGallery = () => {
    const {cats, previousCats, loading, error} = useSelector(state => state.cats);
    const dispatch = useDispatch();

    const handleScroll = (e) => {
        if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
            dispatch(fetchCats({limit: 10}));
        }
    };

    useEffect(() => {
        if (JSON.stringify(previousCats) === JSON.stringify(cats) && cats.length !== 0 && previousCats.length !== 0) {
            return
        } else {
            console.log(previousCats, cats);
            dispatch(fetchCats({limit: 20}));
        }

        window.addEventListener('scroll', throttle(handleScroll, 2000));
        return function () {
            window.removeEventListener('scroll', throttle(handleScroll, 2000));
        };
    }, []);

    if (error) return <h1>{error}</h1>;

    return (
      <>
          <div className={'cats-gallery'}>
              {
                  cats.map(item => <CatCard key={item.id} cat={item}/>)
              }
          </div>
          {
            loading && <Loader/>
          }
      </>
    );
};

export default CatsGallery;