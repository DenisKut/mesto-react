export default function PopupWithForm({name, title, children, btnText, isOpen, onClose}) {
  return(
    <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <form className="popup__form" name={name} autoComplete="off" noValidate>
          <button className="popup__close-btn" onClick={onClose} aria-label="ClosePopup" type="button" title="Закрыть окно"></button>
          <fieldset className="popup__field">
            <legend className="popup__heading">{title}</legend>
            <div className="popup__children">
              {children}
            </div>
            <button className="popup__submit-btn" aria-label="SavePopup" type="submit">{btnText}</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
