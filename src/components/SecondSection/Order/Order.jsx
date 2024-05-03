export const Order = () => {
    return (
      <div className="order">
        <div className="how-order">
          <h2 className="how-to-get">Как заказать доставку посылки из США?</h2>
        </div>
        <div className="clue">
          <div className="clue-item">
            <img
              src="/src/assets/img/icons/registration.png"
              alt="icon"
              className="clue-item-img"
            />
            <div className="about-paragraph">
              <p className="name-paragraph">Зарегистрируйтесь</p>
              <p className="info-paragraph">Получите адрес для доставки посылок в США</p>
            </div>
          </div>
          <div className="clue-item">
            <img
              src="/src/assets/img/icons/go_buy.png"
              alt="icon"
              className="clue-item-img"
            />
            <div className="about-paragraph">
              <p className="name-paragraph">Покупайте</p>
              <p className="info-paragraph">Заказывайте онлайн и отправляйте посылки на наш склад</p>
            </div>
          </div>
          <div className="clue-item">
            <img
              src="/src/assets/img/icons/go_buy.png"
              alt="icon"
              className="clue-item-img"
            />
            <div className="about-paragraph">
              <p className="name-paragraph">Получайте</p>
              <p className="info-paragraph">Ваши посылки доставят в течение 7-14 дней</p>
            </div>
          </div>
        </div>
        <div className="get-now">
          <a href="#">
            <button className="get-now-btn">Получи сейчас</button>
          </a>
        </div>
      </div>
    );
  }