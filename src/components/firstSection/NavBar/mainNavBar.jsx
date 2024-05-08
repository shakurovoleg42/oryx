import { useState } from "react";
import "./mainNavBar.scss";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

export const MainNavBar = () => {
    console.log("navbar is working")

    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (itemIndex) => {
      setActiveItem(itemIndex);
    };

    return (
        <div className="header">
            <img className="logo" src="/src/assets/img/logo/main_logo.png" alt="logo" />
            <ul className="menu">
                <li
                    className={activeItem === 0 ? 'active' : ''}
                    onClick={() => handleClick(0)}
                >
                    <a href="#" className="link">О нас</a>
                </li>
                <li
                    className={activeItem === 1 ? 'active' : ''}
                    onClick={() => handleClick(1)}
                >
                    <a href="#" className="link">Популярные магазины</a>
                </li>
                <li
                    className={activeItem === 2 ? 'active' : ''}
                    onClick={() => handleClick(2)}
                >
                    <a href="#" className="link">Купи вместо меня</a>
                </li>
                <li
                    className={activeItem === 3 ? 'active' : ''}
                    onClick={() => handleClick(3)}
                >
                    <a href="#" className="link">Контакты</a>
                </li>
                <li
                    className={activeItem === 4 ? 'active' : ''}
                    onClick={() => handleClick(4)}
                >
                    <a href="#" className="link">Калькулятор</a>
                </li>
            </ul>
            <div className="reg-menu">
                <button className="Sign-In">
                    <MeetingRoomIcon style={{
                        color: "white",
                        marginLeft: "8px",
                        }}/>
                    <p className="p-Sign-In">Вход</p>
                </button>
                <button className="Sign-Up">
                    <p className="p-Sign-Up">Регистрация</p>
                </button>
            </div>
        </div>
    )
}