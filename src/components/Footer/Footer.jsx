import "./footer.scss";

export const Footer = () => {
    console.log("Footer is working")
    return (
        <div className="footer_section">
            <div className="footer_top">
                <img src="" alt="" />
                <div className="numbers">
                    1 номер
                </div>
                <div className="numbers">
                    2 номер
                </div>
                <div className="instagram">
                    инста
                </div>
                <div>
                    <button>
                        Войти в личный кабинет
                    </button>
                    <button>
                        Регистрация в ЛК
                    </button>
                </div>
            </div>
        </div>
    )
}