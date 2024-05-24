import { Link } from 'react-router-dom';
import { AboutHeader } from '../../components/FirstSection/NavBar/AboutHeader/AboutHeader';
import { Footer } from "../../components/Footer/Footer";
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
            <div>
                
            </div>
            <Footer/>
        </>
    )
}