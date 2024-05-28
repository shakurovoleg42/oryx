// import { FirstIndex } from "../components/FirstSection/FirstIndex";
import { MainNavBar } from "../components/FirstSection/NavBar/MainNavBar";
import { AboutDelivery } from "../components/FirstSection/AboutFirst/AboutDelivery";
import { Order } from "../components/SecondSection/Order/Order";
import { Popular } from "../components/ThirdSection/Popular";
import { CalcSection } from "../components/CalcSection/CalcSection";
import { Faq } from "../components/Faq/Faq";
import { Pros } from "../components/Pros/Pros";
import { About } from "../components/AboutCompany/About";
import { Footer } from "../components/Footer/Footer";

export const Main = () => {
    return (
        <>
            <MainNavBar/>
            <AboutDelivery/>
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
