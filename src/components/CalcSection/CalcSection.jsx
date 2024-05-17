import { useState } from 'react';
import handCalculateImage from '../../assets/img/images/hand_calculate.png';
import SquareImage from '../../assets/img/elements/square.png';
import "./calcSection.scss";

export const CalcSection = () => {
    
    const [weight, setWeight] = useState('');

    let price = 0;
    if (weight == 0 || weight === '' || isNaN(weight)) {
        price = '';
    } else {
        price = weight * 13;
    }

    console.log("CalcSection is working");

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    console.log("CalcSection is working");

    return (
        <div className="container">
            <div className="calc_container">
                <div className="calc_section">
                    <div className="calc_price_title">
                        <p>Калькулятор стоимости доставки</p>  
                    </div>
                    <div className="price_calc_delivery_section">
                        <div className="select_country">
                            {/* страна */}
                            <select className="select_country_select" name="" id="" placeholder="213123">
                                <option
                                    value=""
                                    disabled
                                    selected style={{
                                        width: "164px",
                                        height: "35.98px",
                                        fontSize: "14.49px",
                                        fontWeight: "400",
                                        lineHeight: "25.78px",
                                        textAlign: "center",
                                        color: "#151515"
                                    }}
                                >
                                    Выберите страну
                                </option>
                                <option value="UK" style={{border: "none"}}>Великобритания</option>
                                <option value="USA" style={{border: "none"}}>США</option>
                                <option value="Georgia" style={{border: "none"}}>Грузия</option>
                                <option value="Kazakhstan" style={{border: "none"}}>Казахстан</option>
                                <option value="Uzbekistan" style={{border: "none"}}>Узбекистан</option>
                            </select>
                        </div>
                        <div>
                            {/* цифры  кг */}
                            <input
                                className="price_input"
                                type="text"
                                placeholder='Вес'
                                value={weight}
                                onChange={handleWeightChange}
                                style={{marginLeft: "15.74px", border: "none"}}
                            />
                        </div>
                            <div className="calc_price">
                                <p style={{marginLeft: "15.74px"}}>Итог:{price}$</p>
                            </div>
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