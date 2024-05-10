import handCalculateImage from '../../assets/img/images/hand_calculate.png';
import SquareImage from '../../assets/img/elements/square.png';
import "./calcSection.scss";

export const CalcSection = () => {
    

    let price = 0
    if (price == 0) {
        price = '';
    }

    console.log("CalcSection is working");

    return (
        <div className="container">
            <div className="calc_container">
                <div className="calc_section">
                    <div className="calc_price_title">
                        <p>Калькулятор стоимости доставки</p>  
                    </div>
                    <div className="calc_price">
                        <p>Итог:{price}$</p>
                    </div>
                    <div className="calc_time_delivery">
                        <p>Срок доставки От 7 до 14 дней</p>
                    </div>
                    <hr className="horizontal_line" />
                    <div className="calc_faq">
                        <p>* Стоимость доставки – 13 долларов за килограмм. Чтобы вы не переплачивали, мы округляем расчет веса до 100 грамм. В списке можно выбрать популярные товары и узнать примерную стоимость их доставки, а на калькуляторе рассчитать точно по весу.</p>
                    </div>
                </div>
                <div style={{ position: 'relative', overflow: 'visible' }}>
                    <img
                        src={SquareImage}
                        alt="square"
                        style={{
                            width: '376px',
                            height: '362px',
                            marginLeft: '208px',
                            marginBottom: '44px',
                            marginTop: '185px',
                            borderRadius: '0px 181px 0px 0px',
                        }}
                    />
                    <img
                        src={handCalculateImage}
                        alt="hand_hok"
                        style={{
                            position: 'absolute',
                            width: '480px',
                            height: '598px',
                            top: '-21%',
                            left: '15%',
                            zIndex: 1,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}