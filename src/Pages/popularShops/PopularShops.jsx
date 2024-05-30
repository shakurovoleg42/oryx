import { Link } from 'react-router-dom';
import { AboutPageHeader } from '../../components/firstSection/NavBar/AboutHeader/AboutPageHeader'; 
import { MainFooter } from '../../components/Footer/MainFooter';
import './popularshops.scss';

export const PopularShops = () => {

    return (
        <>
            <AboutPageHeader/>
            <div className="content">
                <div className="navigation">
                    <p style={{textDecoration: "none", color: "#6C757D", fontFamily: "Inter"}}>
                        <Link to="/" style={{textDecoration: "none", color: "#212529", marginLeft: "15px", fontFamily: "Inter"}}>
                            Главная
                        </Link>
                        /Популярные магазины
                    </p>
                </div>
            </div>
            <div className='content-preview'>
                <div className='popular-shops-preview' style={{ width: "1191px", height: "52px", marginTop: "16px"}}>
                    <div style={{ width: "100%", height: "48px", marginTop: "16px"}}>
                        <p style={{ 
                            fontFamily: "Montserrat", 
                            fontSize: "36.25px", 
                            fontWeight: "500", 
                            lineHeight: "48px", 
                            textAlign: "left",
                            color: "#212529",
                            margin: "0"    
                        }}>
                            Популярные магазины в США
                        </p> 
                    </div>
                    <div style={{ width: "480px", height: "56px"}}>
                        <p style={{ margin: "0", fontFamily: "Montserrat", fontWeight: "400", fontSize: "17px", color: "#666666"}}>Мы подготовили для вас список самых популярных магазинов одежды, которые диктуют тренды каждого сезона</p>
                    </div>
                </div>
            </div>
            <div className='category-container'>
                <div className='categories'>
                    {itemDataCategory.map((item, index) => (
                    <div className='category-items' key={index}>
                            <p>{item.title}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div className='what-often-buy'>
                <div className='what-often-buy-title'>
                    <p style={{margin: "0",fontSize: "42px", fontFamily: "Mulish", fontWeight: "800", lineHeight: "52px", color: "#222222"}}>Что чаще всего покупают в США?</p>
                </div>
                <div className='what-often-buy-text'>
                    <p style={{margin: "0",fontSize: "18.28px", fontFamily: "Montserrat", fontWeight: "400", lineHeight: "28px", color: "#666666"}}>
                        Сейчас огромной популярностью пользуются интернет-магазины в США. В Америке можно купить все, что угодно от одежды, бытовой техники и даже автомобильных запчастей. На покупке оригинальных брендов Вы сэкономите 20-40% её офлайн стоимости, а на скидках можно сэкономить до 80-90%, учитывая доставку. Помимо экономии, интернет-шоппинг в США отличается огромным разнообразием ассортимента и эксклюзивных коллекций, которые редко найдёшь в нашей стране.
                    </p>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}


const itemDataCategory = [
    {
        title: 'Одежда'
    },
    {
        title: 'Обувь'
    },
    {
        title: 'Акссесуары'
    },
    {
        title: 'Сумки'
    },
    {
        title: 'Техника'
    },
    {
        title: 'Косметика'
    },
    {
        title: 'Бижутерия'
    }
]