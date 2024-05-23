import { AboutHeader } from "../../components/FirstSection/NavBar/AboutHeader/AboutHeader"

export const About = () => {
    return (
        <>
            <AboutHeader/>
            <div className="content">
                <div className="navigation">
                    <p> <a href="">Главная</a> / О компании </p>
                </div>
            </div>
        </>
    )
}