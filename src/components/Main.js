import React, {useState, useEffect} from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

export default function Main({onEditProfile, onAddPlace, onEditAvatar, handleCardClick}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  const cardsElements = cards.map((item) => (
    <Card
      key={item._id}
      cardData={item}
      onCardClick={handleCardClick}
    />
  ))

  useEffect(() => {
    api.getInitialData()
      .then(([cards, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch(error => console.log(error));
  }, []);

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__information">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
            onClick={onEditAvatar}
          ></div>
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button
            className="profile__edit-button"
            aria-label="Edit"
            type="button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-btn"
          aria-label="AddCard"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cardsElements}
      </section>
    </main>
  )
}
