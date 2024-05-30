import { useState } from "react";
import "./mainNavBar.scss";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import main_logo from "/src/assets/img/logo/main_logo.png"
import { Link } from "react-router-dom";

export const MainNavBar = () => {

    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (itemIndex) => {
      setActiveItem(itemIndex);
    };

    return (
        <div className="header">
            <img className="logo" src={main_logo} alt="logo" />
            <ul className="menu">
                <li
                    className={activeItem === 0 ? 'active' : ''}
                    onClick={() => handleClick(0)}
                >
                    <Link to="#!" className="link">О нас</Link>
                </li>
                <li
                    className={activeItem === 1 ? 'active' : ''}
                    onClick={() => handleClick(1)}
                >
                    <Link to="/popular-shops" className="link">Популярные магазины</Link>
                </li>
                <li
                    className={activeItem === 2 ? 'active' : ''}
                    onClick={() => handleClick(2)}
                >
                    <Link to="#!" className="link">Купи вместо меня</Link>
                </li>
                <li
                    className={activeItem === 3 ? 'active' : ''}
                    onClick={() => handleClick(3)}
                >
                    <Link to="#!" className="link">Контакты</Link>
                </li>
                <li
                    className={activeItem === 4 ? 'active' : ''}
                    onClick={() => handleClick(4)}
                >
                    <Link to="#!" className="link">Калькулятор</Link>
                </li>
            </ul>
            <div className="reg-menu">
                <button className="sign-in">
                    <MeetingRoomIcon style={{
                        color: "white",
                        marginLeft: "8px",
                        }}/>
                    <p className="p-sign-in">Вход</p>
                </button>
                <button className="sign-up">
                    <p className="p-sign-up">Регистрация</p>
                </button>
            </div>
        </div>
    )
}