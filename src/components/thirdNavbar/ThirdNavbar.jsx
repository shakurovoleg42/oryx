import './thirdNavbar.scss';
import redLogo from "/src/assets/img/logo/red_logo.png";
import { Link } from "react-router-dom";

export const ThirdNavbar = () => {

    return (
        <div className="header-about-page">
            <img className="logo-about-page" src={redLogo} alt="logo-about-page" />
            <div className="reg-menu">
                <button className="my-cabinet">
                    <p className="text-my-cabinet">
                        <Link className="link-my-cabinet" to="#!">
                            Личный кабинет
                        </Link>
                    </p>
                </button>
            </div>
        </div>
    )
}