import { MainNavBar } from "../components/firstSection/NavBar/mainNavBar";
import { AboutDelivery } from "../components/firstSection/AboutFirst/AboutDelivery";
import { Order } from "../components/order/Order";
import { Popular } from "../components/ThirdSection/Popular";
import { CalcSection } from "../components/CalcSection/CalcSection";
import { Faq } from "../components/Faq/Faq";
import { Pros } from "../components/Pros/Pros";
import { About } from "../components/AboutCompany/About";
import { MainFooter } from "../components/Footer/MainFooter";

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
            <MainFooter />
        </>
    )
}
