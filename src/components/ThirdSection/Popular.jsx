// import { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import hilfiger from '/src/assets/img/slider-icons/hilfiger.png'
import adidas from '/src/assets/img/slider-icons/adidas.png'
import nike from '/src/assets/img/slider-icons/nike.png'
import calvin_clain from '/src/assets/img/slider-icons/calvin_clain.png'
import hnm from '/src/assets/img/slider-icons/hnm.png'
import victorias_secret from '/src/assets/img/slider-icons/victorias_secret.png'

import "./popular.scss";
import { Link } from 'react-router-dom';

export const Popular = () => {


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
                <Link to="#!">
                    <button className="see_more">Смотреть все</button>
                </Link>
            </div>
            
        </div>
    );
}

const itemData = [
    {
        img: hilfiger,
        width: "168px",
        height: "168px",
        ml: "32px",
        mr: "40px"
    },
    {
        img: adidas,
        width: "168px",
        height: "113.78px",
        ml: "0px",
        mr: "39px"
    },
    {
        img: nike,
        width: "169px",
        height: "115px",
        ml: "0px",
        mr: "40px"
    },
    {
        img: calvin_clain,
        width: "168px",
        height: "168px",
        ml: "0px",
        mr: "6px"
    },
    {
        img: hnm,
        width: "236px",
        height: "133px",
        ml: "0px",
        mr: "6px"
    },
    {
        img: victorias_secret,
        width: "168px",
        height: "168px",
        ml: "6px",
        mr: "32px"
    },
];