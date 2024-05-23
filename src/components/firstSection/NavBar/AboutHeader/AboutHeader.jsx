import "./aboutheader.scss";
import { Link } from "react-router-dom";

export const AboutHeader = () => {

    return (
        <div className="header-about-page">
            <img className="logo-about-page" src="/src/assets/img/logo/red_logo.png" alt="logo-about-page" />
            <div className="reg-menu">
                <button className="Sign-In" style={{width: "125.31px", height: "48px", borderRadius: "30px"}}>
                    <img src="/src/assets/img/icons/lock.svg" style={{
                        width: "15.21px",
                        height: "21.85px",
                        marginLeft: "20.92px",
                        color: "#FFFFFF",
                        }}/>
                    <p className="p-Sign-In">
                        <Link className="link_sign-in" to="#!" style={{}}>
                            Вход
                        </Link>
                    </p>
                </button>
                <button className="Sign-Up">
                    <p className="p-Sign-Up">
                        <Link className="link_sign-up" to="#!">
                            Регистрация
                        </Link>
                    </p>
                </button>
            </div>
        </div>
    )
}