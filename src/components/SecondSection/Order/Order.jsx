import "./order.scss";

export const Order = () => {

    return (
        <div className="order">
            <div className="how-order">
                <h2 className="how-to-get">Как заказать доставку посылки из США?</h2>
            </div>
            <div>
                <img src="/src/assets/img/icons/registration.png" alt="registration-icon"
                    style={{
                        "width": "73px",
                        "height": "73px"
                    }}
                />
                <img src="/src/assets/img/icons/go_buy.png" alt="go-buy-icon"
                    style={{
                        "width": "73px",
                        "height": "73px"
                    }}
                />
                <img src="" alt="get-icon" />
            </div>
            <div className="get-now">
                <a href="#">
                   <button className="get-now-btn">Получи сейчас</button> 
                </a>
            </div>
        </div>
    )
}