import React, {useEffect, useRef} from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const refOnCardName = useRef(null);
  const refOnCardLink = useRef(null);

  useEffect(() => {
    refOnCardName.current.value = '';
    refOnCardLink.current.value = '';
  }, [onAddPlace]);

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      name: refOnCardName.current.value,
      link: refOnCardLink.current.value
    });
  }

  return(
    <PopupWithForm
      name="add"
      title="Новое место"
      btnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="card-name"
        name="CardName"
        className="popup__input popup__input_section_name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        ref={refOnCardName}
      />
      <span className="card-name-error" ></span>
      <input
        id="card-link"
        name="CardLink"
        className="popup__input popup__input_section_link"
        placeholder="Ссылка на картинку"
        type="url"
        required
        ref={refOnCardLink}
      />
      <span className="card-link-error"></span>
    </PopupWithForm>
  );
}
