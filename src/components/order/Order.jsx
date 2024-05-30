import { Link } from "react-router-dom";
import goRegistration from "/src/assets/img/icons/registration.png";
import goBuy from "/src/assets/img/icons/go_buy.png";
import goGet from "/src/assets/img/icons/get.png";
import "./order.scss"

export const Order = () => {
    return (
      <div className="order">
        <div className="how-order">
          <h2 className="how-to-get">Как заказать доставку посылки из США?</h2>
        </div>
          <div className="clue">
            <div className="clue-item">
              <img
                src= {goRegistration}
                alt="icon"
                className="clue-item-img"
              />
              <div className="about-paragraph">
                <p className="name-paragraph">Зарегистрируйтесь</p>
                <p className="info-paragraph">Получите адрес для доставки посылок в США</p>
              </div>
            </div>
            <div className="clue-item" style={{marginLeft: "178px", marginRight: "177px"}}>
              <img
                src={goBuy}
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
                src={goGet}
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
          <Link to="#!">
            <button className="get-now-btn">Получи сейчас</button>
          </Link>
        </div>
      </div>
    );
  }