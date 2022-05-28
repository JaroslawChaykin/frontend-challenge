import './catCard.css'

const CatCard = ({cat}) => {
    return (
      <div className={'cat-card'}>
          <img src={cat.url} alt=""/>
      </div>
    );
};

export default CatCard;