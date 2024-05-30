import { Link } from "react-router-dom";
import { AboutPageHeader } from "../../components/firstSection/NavBar/AboutHeader/AboutPageHeader";
import { MainFooter } from "../../components/Footer/MainFooter";
import './aboutPage.scss'

export const About = () => {
    return (
        <>
            <AboutPageHeader/>
            <div className="content">
                <div className="navigation">
                    <p style={{textDecoration: "none", color: "#6C757D", fontFamily: "Inter"}}>
                        <Link to="/" style={{textDecoration: "none", color: "#212529", marginLeft: "15px", fontFamily: "Inter"}}>
                            Главная
                        </Link>
                        /О компании
                    </p>
                </div>
            </div>
            <div className="container_about_oryx">
                <div className="header_about_oryx">
                    <div 
                        style={{
                                width: "491px",
                                height: "490px",
                            }}
                    >
                        <img src="/src/assets/img/images/about.jpg" alt="about-img"/>
                    </div>
                    <div style={{width: "500px", height: "356px", marginLeft: "65px"}}>
                        <div className="title_about_oryx" style={{width: "369px", height: "52px"}}>
                            <p>О компании Oryx</p>
                        </div>
                        <div className="text_about_oryx" style={{width: "478px", height: "224px"}}>
                            <p>
                                ORYX – это надежный мейлфорвардер, имеющий собственный автоматизированный склад в безналоговом штате Америки. Покупка и доставка из США любых товаров – наша основная деятельность. Мы сотрудничаем с лучшими перевозчиками долго и плодотворно благодаря этому готовы предложить доступную стоимость доставки.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="preview_about_oryx">
                <div style={{ width: "1191px", height: "52px", marginTop: "100px"}}>
                    <p style={{ 
                        fontFamily: "Mulish", 
                        fontSize: "42px", 
                        fontWeight: "800", 
                        lineHeight: "52px", 
                        textAlign: "left",
                        margin: "0"    
                    }}>
                        Наш склад в США
                    </p> 
                </div>
            </div>
            <div className="about_sklads" style={{marginTop: "40px", paddingBottom: "100px"}}>
                {skladInfo.map((item, index) => (
                    <div className="box_about" key={index}>
                        <div className="sklad_photos">
                            <div>
                                <img src={item.img} alt="sklad1" />
                            </div>
                            <div>
                                <img src={item.img2} alt="sklad2" style={{marginLeft: "23.84px"}}/>
                            </div>
                        </div>
                        <div className="sklad_description" style={{width: "595.34px"}}>
                            <p>{item.description}</p>
                            <p>{item.description2}</p>
                        </div>
                    </div>
                ))}
            </div>
            <MainFooter/>
        </>
    )
}

const skladInfo = [
    {
        img: "/src/assets/img/images/sklad1.png",
        img2: "/src/assets/img/images/sklad2.png",
        description: "Независимо от магазина, количества товаров и веса, входящие посылки принимаются на нашем складе бесплатно.",
        description2: "Мы бесплатно объединим любое количество входящих посылок из одного или нескольких магазинов в одну общую посылку для вашей экономии на доставке (по сравнению с прямой отправкой из магазинов экономия может составлять до 80%).",

    },
    {
        img: "/src/assets/img/images/sklad1.png",
        img2: "/src/assets/img/images/sklad2.png",
        description: "Качественная упаковка, подходящая для международных отправлений всех Ваших покупок, и их переупаковка для уменьшения веса отправления. Стоимость упаковки зависит от размера посылки и формы товаров и составляет от 3 до 8$.",
        description2: "Хранение всех Ваших покупок осуществляется абсолютно бесплатно до 14 дней",
    }
];
