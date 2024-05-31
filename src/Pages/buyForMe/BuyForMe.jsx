import React from 'react';
import { AboutPageHeader } from '../../components/firstSection/NavBar/AboutHeader/AboutPageHeader';
import { Link } from 'react-router-dom';
import link_icon from "../../assets/img/icons/link_icon.svg";
import shop_icon from "../../assets/img/icons/shop_icon.svg";
import globe_icon from "../../assets/img/icons/globe_icon.svg";
import arrow_right from "../../assets/img/icons/arrow_right.svg";
import './buyForMe.scss';

export const BuyForMe = () => {

    const steps = [
        {
            imgSrc: link_icon,
            text: 'Отправьте нам ссылку',
        },
        {
            imgSrc: shop_icon,
            text: 'Мы осуществим покупку.',
        },
        {
            imgSrc: globe_icon,
            text: 'Получи посылку в Казахстане',
        },
    ];

    return (
        <>
            <AboutPageHeader />
            <div className="content">
                <div className="navigation">
                    <p style={{ textDecoration: "none", color: "#6C757D", fontFamily: "Inter" }}>
                        <Link to="/" style={{ textDecoration: "none", color: "#212529", marginLeft: "15px", fontFamily: "Inter" }}>
                            Главная
                        </Link>
                        /Купите вместо меня
                    </p>
                </div>
            </div>
            <div className="info-container">
                <p className="info-text">ORYX осуществит покупку вместо Вас</p>
            </div>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <div className="step-content" draggable="false">
                            <div className="step-icon" >
                                <img src={step.imgSrc} alt={`Step ${index + 1}`} draggable="false"/>
                            </div>
                            <p className="step-text">{step.text}</p>
                        </div>
                        {index < steps.length - 1 && <img style={{pointerEvents: "none"}} src={arrow_right} className="arrow" alt="arrow" draggable="false"/>}
                    </div>
                ))}
            </div>
            <div className='package-name'>
                <div className='forms'>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </>
    );
};
