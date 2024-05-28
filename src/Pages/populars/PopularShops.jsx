import { Link } from 'react-router-dom';
import { AboutHeader } from '../../components/firstSection/Navbar/Aboutheader/AboutHeader';
import { Footer } from '../../components/Footer/Footer';
import './popularshops.scss';

export const PopularShops = () => {

    return (
        <>
            <AboutHeader/>
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
                    <div style={{ width: "650px", height: "56px"}}>
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
            <Footer/>
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