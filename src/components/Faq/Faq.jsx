import { useState } from 'react';
import { Accordion } from 'rsuite';
import './faq.scss';

export const Faq = () => {
    console.log('Faq is working');

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
            <p className="faq_title">Часто задаваемые вопросы</p>
            <a href="https://t.me/Sellkon" className="whatsapp_icon">
              <img src="/src/assets/img/elements/call.svg.png" alt="" />
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
                        <p>{item.text}</p>
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
            <div>
                Доставка в Казахстан в среднем занимает 7-10 дней с момента отправки посылки с нашего склада в США. Иногда из-за задержек рейсов, праздничных дней в США, загруженности курьерских служб в дни крупных распродаж в США срок может увеличиться.
                <br />
                <br />
                При любых изменениях сроков мы пришлем уведомление с объяснением причины. Задержки случаются редко, тем не менее рекомендуем позаботиться о временном запасе, если нужно получить посылку к определенному дню. Постарайтесь просто сделать заказ немного раньше.
            </div>
        ),
    },
    {
        title: "Как мне оплатить доставку?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.",
    },
    {
        title: "В каких магазинах США можно делать покупки?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.",
    },
    {
        title: "Как рассчитать стоимость доставки?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.",
    },
    {
        title: "Какие товары нельзя заказывать?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.",
    },
    {
        title: "Как вернуть приобретенный товар?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.",
    },
    {
        title: "Что делать, если неправильно указал адрес доставки?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.",
    },
    {
        title: "Буду ли я оплачивать налог при покупке?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.",
    },
    {
        title: "Какие таможенные лимиты?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi nemo nesciunt doloribus esse, tempore, a autem dolorem, sunt doloremque optio aliquid est non voluptatum nam at magnam quas eum.",
    }
];