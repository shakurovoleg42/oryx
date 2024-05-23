import { useState } from 'react';
import { Accordion } from 'rsuite';
import './faq.scss';

export const Faq = () => {
    const [activeKey, setActiveKey] = useState(null);

    const handlePanelToggle = (eventKey) => {
        setActiveKey((prevActiveKey) => {
            if (prevActiveKey === eventKey) {
                return null;
            }
            return eventKey;
        });
    };

    return (
        <div className="faq_section">
            <div className="faq_title">Часто задаваемые вопросы</div>
            <a href="https://t.me/Sellkon" className="whatsapp_icon">
                <img src="/src/assets/img/elements/call.svg.png" alt="WhatsApp Icon" />
            </a>
            <Accordion
                activeKey={activeKey}
                onSelect={handlePanelToggle}
                style={{
                    width: "997px",
                    margin: "0 auto",
                    textAlign: "left",
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "Inter",
                    lineHeight: "18.15px"
                }}
            >
                {itemDataAccordion.map((item, index) => (
                    <Accordion.Panel key={index} header={item.title} eventKey={index}>
                        <div>{item.text}</div>
                    </Accordion.Panel>
                ))}
            </Accordion>
        </div>
    );
};

const itemDataAccordion = [
    {
        title: "Сколько времени занимает доставка?",
        text: (
            <p>
                Доставка в Казахстан в среднем занимает 7-10 дней с момента отправки посылки с нашего склада в США. Иногда из-за задержек рейсов, праздничных дней в США, загруженности курьерских служб в дни крупных распродаж в США срок может увеличиться.
                <br />
                <br />
                При любых изменениях сроков мы пришлем уведомление с объяснением причины. Задержки случаются редко, тем не менее рекомендуем позаботиться о временном запасе, если нужно получить посылку к определенному дню. Постарайтесь просто сделать заказ немного раньше.
            </p>
        ),
    },
    {
        title: "Как мне оплатить доставку?",
        text: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.
            </p>
        ),
    },
    {
        title: "В каких магазинах США можно делать покупки?",
        text: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.
            </p>
        ),
    },
    {
        title: "Как рассчитать стоимость доставки?",
        text: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.
            </p>
        ),
    },
    {
        title: "Какие товары нельзя заказывать?",
        text: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.
            </p>
        ),
    },
    {
        title: "Как вернуть приобретенный товар?",
        text: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.
            </p>
        ),
    },
    {
        title: "Что делать, если неправильно указал адрес доставки?",
        text: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.
            </p>
        ),
    },
    {
        title: "Буду ли я оплачивать налог при покупке?",
        text: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.
            </p>
        ),
    },
    {
        title: "Какие таможенные лимиты?",
        text: (
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.
            </p>
        ),
    }
];
