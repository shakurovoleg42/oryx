// import { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./popular.scss";

export const Popular = () => {
    console.log("popular is working");


    return (
        <div className="popular">
            <div className="popular_shops">
                <p>Популярные магазины</p>
            </div>
            <div className="carousel_section">
                <KeyboardArrowLeftIcon
                    sx={{
                        fontSize: "32px",
                        //добавить backgroundColor: "#EB3738" и color: "#FFFFFF" на активную кнопку 
                        borderRadius: '50%',
                        padding: '14px',
                        cursor: "pointer",
                        '&:hover': {
                            transition: "0.5s",
                            backgroundColor: "#EB3738",
                            color: "#FFFFFF",
                        },
                        
                    }}
                />
                    {itemData.map((item, index) => (
                            <img
                            className=""
                            key={index}
                            src={item.img}
                            style={{
                                width: `${item.width}`,
                                height: `${item.height}`,
                                marginLeft: `${item.ml}`,
                                marginRight: `${item.mr}`,
                            }}
                            alt="popular_shops"
                        />
                    ))}
                <KeyboardArrowRightIcon
                    sx={{
                        //добавить backgroundColor: "#EB3738" и color: "#FFFFFF" на активную кнопку
                        fontSize: "32px",
                        borderRadius: '50%',
                        padding: '14px',
                        cursor: "pointer",
                        '&:hover': {
                            transition: "0.5s",
                            backgroundColor: "#EB3738",
                            color: "#FFFFFF",
                        },
                    }}
                />
            </div>
            <div className='see_more_more'>
                <a href="#!">
                    <button className="see_more">Смотреть все</button>
                </a>
            </div>
            
        </div>
    );
}

const itemData = [
    {
        img: '/src/assets/img/slider-icons/hilfiger.png',
        width: "168px",
        height: "168px",
        ml: "32px",
        mr: "40px"
    },
    {
        img: '/src/assets/img/slider-icons/adidas.png',
        width: "168px",
        height: "113.78px",
        ml: "0px",
        mr: "39px"
    },
    {
        img: '/src/assets/img/slider-icons/nike.png',
        width: "169px",
        height: "115px",
        ml: "0px",
        mr: "40px"
    },
    {
        img: '/src/assets/img/slider-icons/calvin_clain.png',
        width: "168px",
        height: "168px",
        ml: "0px",
        mr: "6px"
    },
    {
        img: '/src/assets/img/slider-icons/hnm.png',
        width: "236px",
        height: "133px",
        ml: "0px",
        mr: "6px"
    },
    {
        img: '/src/assets/img/slider-icons/victorias_secret.png',
        width: "168px",
        height: "168px",
        ml: "6px",
        mr: "32px"
    },
];