import { Link } from "react-router-dom";
import "./about.scss";

export const About = () => {
    return (
        <div className="about-company">
            <div>
                    <div className="title-section">
                        <p className="title">
                            О компании
                        </p>
                    </div>
                    <div className="text-section">
                        <p className="text">
                            ORYX – это надежный мейлфорвардер, имеющий собственный автоматизированный склад в безналоговом штате Америки. Покупка и доставка из США любых товаров – наша основная деятельность. Мы сотрудничаем с лучшими перевозчиками долго и плодотворно благодаря этому готовы предложить доступную стоимость доставки.
                        </p>
                    </div>
                    <Link to="/about">
                        <button className="know-more">
                            Узнать больше
                            <img className="arrowtomore" src="/src/assets/img/elements/arrowtomore.png" alt="arrowtomore"/>
                        </button>
                    </Link>
            </div>
                <img className="big-car" src="/src/assets/img/images/big_car.png" alt="big_car" style={{width: "445px", height: "325px"}}/>
        </div>
    )
}
// className="title_text_section"