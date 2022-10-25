import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import React, {useState} from "react";

export default function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className="page">
        <Header/>
        <Main className="content"
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          handleCardClick={handleCardClick}
        />
        <Footer/>

        <ImagePopup
          selectedCard={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="add"
          title="Новое место"
          btnText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input id="card-name" name="CardName" className="popup__input popup__input_section_name" placeholder="Название" minLength="2" maxLength="30" required/>
          <span className="card-name-error" ></span>
          <input id="card-link" name="CardLink" className="popup__input popup__input_section_link" placeholder="Ссылка на картинку" type="url" required/>
          <span className="card-link-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          btnText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input id="profile-name" name="ProfileName" className="popup__input popup__input_section_name" placeholder="Введите имя" minLength="2" maxLength="40" required/>
          <span className="profile-name-error" ></span>
          <input id="profile-profession" name="ProfileProfession" className="popup__input popup__input_section_profession" placeholder="Введите профессию" minLength="2" maxLength="200" required/>
          <span className="profile-profession-error" ></span>
        </PopupWithForm>

        <PopupWithForm
          name="avatar-edit"
          title="Обновить аватар"
          btnText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input id="avatar-link" name="AvatarLink" className="popup__input popup__input_section_avatar" placeholder="Ссылка на картинку" type="url" required/>
          <span className="popup__input-error avatar-link-error"></span>
        </PopupWithForm>

      </div>
    </>
  );
}
