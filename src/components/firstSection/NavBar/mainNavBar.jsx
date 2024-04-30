import "./mainNavBar.scss";

export const MainNavBar = () => {
    console.log("navbar is working")
    return (
        <>
            <div className="header">
                <img className="logo" src="/src/assets/img/logo/main_logo.png" alt="logo" />
                <ul className="menu">
                    <li><a href="#" className="link">О нас</a></li>
                    <li><a href="#" className="link">Популярные магазины</a></li>
                    <li><a href="#" className="link">Купи вместо меня</a></li>
                    <li><a href="#" className="link">Контакты</a></li>
                    <li><a href="#" className="link">Калькулятор</a></li>
                </ul>
                <div className="reg-menu">
                    <button className="Sign-In">Вход</button>
                    <button className="Sign-Up">Регистрация</button>
                </div>
            </div>
        </>
    )
}