import "./about.scss";

export const About = () => {
    return (
        <div className="about_company">
            <div>
                    <div className="title_section">
                        <p className="title">
                            О компании
                        </p>
                    </div>
                    <div className="text_section">
                        <p className="text">
                            ORYX – это надежный мейлфорвардер, имеющий собственный автоматизированный склад в безналоговом штате Америки. Покупка и доставка из США любых товаров – наша основная деятельность. Мы сотрудничаем с лучшими перевозчиками долго и плодотворно благодаря этому готовы предложить доступную стоимость доставки.
                        </p>
                    </div>
                    <a href="#!">
                        <button className="know_more">
                            Узнать больше
                            <img className="arrowtomore" src="/src/assets/img/elements/arrowtomore.png" alt="arrowtomore"/>
                        </button>
                    </a>
            </div>
                <img className="big_car" src="/src/assets/img/images/big_car.png" alt="big_car" style={{width: "445px", height: "325px"}}/>
        </div>
    )
}
// className="title_text_section"