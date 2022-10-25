export default function ImagePopup({selectedCard, isOpen, onClose}) {
  return (
    <div className={`popup popup-view ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup-view__container">
        <button 
          className="popup__close-btn" 
          onClick={onClose} 
          aria-label="ClosePopup" 
          type="button" 
          title="Закрыть окно"
        ></button>
        <img className="popup-view__image" src={selectedCard.link} alt={selectedCard.name}/>
        <p className="popup-view__subtitle">{selectedCard.name}</p>
      </div>
    </div>
  )
}
