import { Link } from 'react-router-dom';
import { MainFooter } from '../../components/Footer/MainFooter';
import { ThirdNavbar } from '../../components/thirdNavbar/ThirdNavbar';

import './contacts.scss'

export const Contacts = () => {
    return (
        <>
            <ThirdNavbar/>
                <div className="content">
                    <div className="navigation">
                        <p style={{textDecoration: "none", color: "#6C757D", fontFamily: "Inter"}}>
                            <Link to="/" style={{textDecoration: "none", color: "#212529", marginLeft: "15px", fontFamily: "Inter"}}>
                                Главная
                            </Link>
                            /Контакты
                        </p>
                    </div>
                </div>
                <div>
                    <div> 
                            {/* контакты */}
                            <div>
                                <p>Контакты</p>
                            </div>
                            <div>
                            {contactsItemData.map((item, index) => (
                                <div key={index}>
                                    <p>{item.title}</p>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                            </div>
                    </div>
                     <div> 
                            {/* карта */}
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
        text:   <Link to="tel:+77003232222">+7 700 323 22 22</Link> 
    },
    {
        title: "Email:",
        text:  <Link to="email:ofis@orix.kz">ofis@orix.kz</Link>  
    },
    {
        title: "whatsapp",
        text:  1  
    },
    {
        title: "Instagram",
        text:   1 
    }
]