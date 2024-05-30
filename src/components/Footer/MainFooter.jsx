import { Link } from "react-router-dom";
import { MainFooterForm } from "./Form";
import "./footer.scss";

export const MainFooter = () => {

    return (
        <div className="footer_section">
            <div className="footer_top">
                <div className="telephones_numbers">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.53" height="25.33" fill="#FFFFFF" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                    <p className="tel_number">
                        <Link to="tel:+7 700 323 22 22" style={{ textDecoration: "none", color: "#D6D6D6"}}>
                            +7 700 323 22 22
                        </Link>
                    </p>
                    <p className="tel_number">
                        <Link to="tel:+7 747 515 56 13" style={{ textDecoration: "none", color: "#D6D6D6"}}>
                            +7 747 515 56 13 
                        </Link>
                    </p> 
                </div>
                <div className="instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.28" height="20.28" fill="#FFFFFF" className="bi bi-instagram" viewBox="0 0 16 16" style={{marginLeft: "38px", backgroundColor: "inherit"}}>
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                    <p className="to_instagram" style={{marginLeft: "3px"}}>
                        <Link to="#!" style={{ textDecoration: "none", color: "#D6D6D6", display: "inline-block" }}>
                            @oryx.usa.kz
                        </Link>
                    </p>
                </div>
                <div className="enter" style={{marginLeft: "202px"}}>
                    <Link to="#!">
                        <button className="btn_enter" style={{width: "200px"}}>
                            Войти в личный кабинет
                        </button>
                    </Link>
                    <Link to="#!">
                        <button className="btn_enter" style={{marginLeft: "13px", width: "155px"}}>
                            Регистрация в ЛК
                        </button>
                    </Link>
                </div>

                <div className="main_footer_wrapper">
                    <MainFooterForm />
                </div>
            </div>

        </div>
    )
}
