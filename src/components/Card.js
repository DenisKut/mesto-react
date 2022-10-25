export default function Card({cardData, onCardClick}) {
  function handleCardClick() {
    onCardClick(cardData);
  }

  return (
    <article className="element">
      <button 
        className="element__delete-btn" 
        aria-label="DeleteCard" 
        type="button" 
        title="Удалить карточку"
      ></button>
      <img className="element__image" onClick={handleCardClick} alt={cardData.name} title="Рассмотреть картинку" src={cardData.link}/>
      <div className="element__caption">
        <h3 className="element__text">{cardData.name}</h3>
        <div className="element__like-section">
          <button className="element__like" aria-label="LikeCard" type="button"></button>
          <p className="element__number-of-likes">{cardData.likes.length}</p>
        </div>
      </div>
    </article>
  )
}
