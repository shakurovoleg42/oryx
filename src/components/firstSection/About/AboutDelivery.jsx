import { Link } from "react-router-dom";
import "./aboutDelivery.scss";

export const AboutDelivery = () => {

    return (
        <div className="about">
            <div className="bethefaster">
                <p>Доставка <span>посылок</span> из США в <span>Казахстан</span></p>
                <div className="quick-service">
                    <p >Покупайте в любых интернет-магазинах Америки, а мы гарантируем быструю доставку. Регистрируйтесь сейчас и откройте себе доступ к лучшим товарам и акциям из США. Просто, Надежно и Удобно.</p>
                </div>
                <Link to="#">
                    <button className="go-registration">Зарегистрируйтесь!</button>
                </Link>
            </div>
            <img src="/src/assets/img/images/airplane.png" alt="airplane"/>
        </div>
    )
}