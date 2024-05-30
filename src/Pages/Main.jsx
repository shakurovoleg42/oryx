import { MainNavBar } from "../components/firstSection/Navbar/MainNavBar";
import { AboutDelivery } from "../components/firstSection/Aboutfirst/AboutDelivery";
import { Order } from "../components/order/Order";
import { Popular } from "../components/thirdSection/Popular";
import { CalcSection } from "../components/calcSection/CalcSection";
import { Faq } from "../components/faq/Faq";
import { Pros } from "../components/pros/Pros";
import { About } from "../components/aboutCompany/About";
import { Footer } from "../components/footer/Footer";

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
