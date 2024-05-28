import { MainNavBar } from "../components/FirstSection/Navbar/MainNavBar.jsx";
import { AboutDelivery } from "../components/FirstSection/Aboutfirst/AboutDelivery.jsx";
import { Order } from "../components/secondSection/Order/Order.jsx";
import { Popular } from "../components/ThirdSection/Popular";
import { CalcSection } from "../components/CalcSection/CalcSection";
import { Faq } from "../components/Faq/Faq";
import { Pros } from "../components/Pros/Pros";
import { About } from "../components/AboutCompany/About";
import { Footer } from "../components/Footer/Footer";

export const Main = () => {
    return (
        <>
            <MainNavBar />
            <AboutDelivery />
            <Order />
            <Popular />
            <CalcSection />
            <Faq />
            <Pros />
            <About />
            <Footer />
        </>
    )
}
