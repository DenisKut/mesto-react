export default function PopupWithImage({cardObject, isOpen, onClose}) {
  return (
    <div className={`popup popup-view ${isOpen && 'popup_opened'}`}>
      <div className="popup-view__container">
        <button className="popup__close-btn" onClick={onClose} aria-label="ClosePopup" type="button" title="Закрыть окно"></button>
        <img className="popup-view__image" src={cardObject.link} alt={cardObject.name}/>
        <p className="popup-view__subtitle">{cardObject.name}</p>
      </div>
    </div>
  )
}
