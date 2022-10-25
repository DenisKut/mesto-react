export default function Card({cardObject, onCardClick, onDelete}) {
  function handleCardClick() {
    onCardClick(cardObject);
  }

  function handleDeletePopupOpen() {
    onDelete(cardObject);
  }

  return (
    <article className="element">
      <button className="element__delete-btn" onClick={handleDeletePopupOpen} aria-label="DeleteCard" type="button" title="Удалить карточку"></button>
      <img className="element__image" onClick={handleCardClick} alt={cardObject.name} title="Рассмотреть картинку" src={cardObject.link}/>
      <div className="element__caption">
        <h3 className="element__text">{cardObject.name}</h3>
        <div className="element__like-section">
          <button className="element__like" aria-label="LikeCard" type="button"></button>
          <p className="element__number-of-likes">{cardObject.likes.length}</p>
        </div>
      </div>
    </article>
  )
}
