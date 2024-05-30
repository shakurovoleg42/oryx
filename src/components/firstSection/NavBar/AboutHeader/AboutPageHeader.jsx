import redLogo from "/src/assets/img/logo/red_logo.png";
import lock from "/src/assets/img/icons/lock.svg"
import { Link } from "react-router-dom";
import "./aboutheader.scss";

export const AboutPageHeader = () => {

    return (
        <div className="header-about-page">
            <img className="logo-about-page" src={redLogo} alt="logo-about-page" />
            <div className="reg-menu">
                <button className="sign-in" style={{width: "125.31px", height: "48px", borderRadius: "30px"}}>
                    <img src={lock} style={{
                        width: "15.21px",
                        height: "21.85px",
                        marginLeft: "20.92px",
                        color: "#FFFFFF",
                        }}/>
                    <p className="p-sign-in">
                        <Link className="link-sign-in" to="#!" style={{}}>
                            Вход
                        </Link>
                    </p>
                </button>
                <button className="sign-up">
                    <p className="p-sign-up">
                        <Link className="link-sign-up" to="#!">
                            Регистрация
                        </Link>
                    </p>
                </button>
            </div>
        </div>
    )
}