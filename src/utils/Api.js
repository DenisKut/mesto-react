class Api {
  constructor({link, headers}) {
    this._link = link;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._link}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this.checkErrors);
  }

  getUserInfo() {
    return fetch(`${this._link}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this.checkErrors);
  }

  setUserInfo(data) {
    return fetch(`${this._link}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.ProfileName,
        about: data.ProfileProfession,
      })
    })
      .then(this.checkErrors)
  }

  setAvatar(data) {
    console.log(data)
    return fetch(`${this._link}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.AvatarLink
      })
    })
    .then(this.checkErrors)
  }

  addCard(data) {
    return fetch(`${this._link}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.CardName,
        link: data.CardLink
      })
    })
      .then(this.checkErrors);
  }

  deleteCard(data) {
    return fetch(`${this._link}/cards/${data._id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this.checkErrors);
  }

  addLike(data) {
    return fetch(`${this._link}/cards/${data._id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this.checkErrors);
  }

  deleteLike(data) {
    return fetch(`${this._link}/cards/${data._id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this.checkErrors);
  }

  getInitialData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  checkErrors(res) {
    if (res.ok) {
      return res.json();
    }
  
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export default Api = new Api({
  link: 'https://mesto.nomoreparties.co/v1/cohort-51',
  headers: {
    authorization: '22bb9c92-ea2e-40eb-b13f-953212e16dcb',
    'Content-Type': 'application/json'
  }
});
