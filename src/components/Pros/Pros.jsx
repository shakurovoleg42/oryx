import economy from '/src/assets/img/icons/economy.png'
import nadejno from '/src/assets/img/icons/nadejno.png'
import fast from '/src/assets/img/icons/fast.png'
import simple from '/src/assets/img/icons/simple.png'

import './pros.scss';

export const Pros = () => {
    return (
        <div className='pros_container' style={{ height: '300px' }}>
            <div className='flex-container'>
                {itemDataPros.map((item, index) => (
                    <div key={index} className='flex-item' style={{marginLeft: "74px"}}>
                        <div className="image-container">
                        <img src={item.img} alt="icons_pros" sx={{ width: `${item.w}`, height: `${item.h}` }} />
                        </div>
                        <div className="text-container">
                            <p className='title_pros' style={{ margin: '0',fontSize: "27.77px", fontWeight: "700", lineHeight: "34.38px", color: '#000000' }}>{item.title}</p>
                            <p className='text_pros' style={{width: "166.61px", margin: '0', fontSize: "15.21px", fontWeight: "400", lineHeight: "18.25px", color: '#000000' }}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      );
}

const itemDataPros = [
    {
        img: economy,
        title:'Экономно',
        text:'Наши клиенты не платят налог с продаж',
        w:'55px',
        h:'63.77px',
    },
    {
        img: nadejno,
        title:'Надежно',
        text:'Гарантируем сохранность товаров',
        w:'61.32px',
        h:'63.77px',
    },
    {
        img: fast,
        title:'Быстро',
        text:'Из США в Казахстан от 7 дней',
        w:'68.87px',
        h:'63.77px',
    },
    {
        img:simple,
        title:'Просто',
        text:'Покупка в США в 3 простых шага',
        w:'68.87px',
        h:'63.77px',
    }
]