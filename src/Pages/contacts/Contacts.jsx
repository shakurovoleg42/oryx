import React from 'react';
import { Link } from 'react-router-dom';
import { MainFooter } from '../../components/Footer/MainFooter';
import { ThirdNavbar } from '../../components/thirdNavbar/ThirdNavbar';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './contacts.scss';

export const Contacts = () => {
    return (
        <>
            <ThirdNavbar/>
            <div className="content">
                <div className="navigation">
                    <p className="breadcrumb">
                        <Link to="/" className="home-link">
                            Главная
                        </Link>
                        /Контакты
                    </p>
                </div>
                <div className='contacts-section'>
                    <div className="contacts-info">
                        <div>
                            <p className="contacts-title">Контакты</p>
                        </div>
                        <div>
                            {contactsItemData.map((item, index) => (
                                <div key={index}>
                                    <p className="contacts-item-title">{item.title}</p>
                                    <p className='info-contacts'>{item.text}</p>
                                </div>
                            ))}
                            <div>
                                <div className='director-company' style={{marginTop: "50px"}}>
                                    <p style={{margin: "0"}}>
                                        Руководитель компании: 
                                    </p>
                                </div>
                                <div style={{marginTop: "22px"}}>
                                    <div>
                                        <p style={{margin: "0",fontFamily: "Inter", fontWeight: "700", fontSize: "30px"}}>
                                            Бейсембаев Бауыржан
                                        </p>
                                        <p style={{margin: "0", color: "#444444", fontSize: "18px", lineHeight: "35px"}}>
                                            b.beysembaev@oryx.kz
                                        </p>
                                        <p style={{margin: "0", color: "#444444", fontSize: "18px", lineHeight: "26px"}}>
                                            +7 702 591 73 55
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contacts-map" style={{paddingTop: "18px"}}>
                        <YMaps>
                            <Map defaultState={{ center: [43.238293, 76.945465], zoom: 15 }} width="100%" height="100%">
                                <Placemark geometry={[43.238293, 76.945465]} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

const contactsItemData = [
    {
        title: "Адрес:",
        text: "Республика Казахстан, г.Алматы, ул.Макатаева, д.125, офис 5, вход в здание с торца"
    },
    {
        title: "Телефон:",
        text:   <Link style={{textDecoration: "none", color: "#444444"}} to="tel:+77003232222">+7 700 323 22 22</Link> 
    },
    {
        title: "Email:",
        text:  <Link style={{textDecoration: "none", color: "#444444"}} to="mailto:ofis@orix.kz">ofis@orix.kz</Link> 
    },
    {
        title: "whatsapp",
        text:  <Link style={{textDecoration: "none", color: "#444444"}} to="https://wa.me/77475155613">+7 747 515 5613</Link>
    },
    {
        title: "Instagram",
        text:   <Link style={{textDecoration: "none", color: "#444444"}} to="https://www.instagram.com/@oryx.usa.kz">@oryx.usa.kz</Link>
    }
]
