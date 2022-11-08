import React, {useEffect, useRef} from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const refOnAvatar = useRef(null);

  useEffect(() => {
    refOnAvatar.current.value = '';
  }, [onUpdateAvatar]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: refOnAvatar.current.value
    });
  }

  return (
    <PopupWithForm
      name="avatar-edit"
      title="Обновить аватар"
      btnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="avatar-link"
        name="AvatarLink"
        className="popup__input popup__input_section_avatar"
        placeholder="Ссылка на картинку"
        type="url"
        required
        ref={refOnAvatar}
      />
      <span className="popup__input-error avatar-link-error"></span>
    </PopupWithForm>
  )
}
