import { MainNavBar } from "./NavBar/mainNavBar";
import { AboutDelivery } from "./About/AboutDelivery";
import './firstIndex.scss';

export const FirstIndex = () => {
    return (
        <div className="section">
            <MainNavBar/>
            <AboutDelivery/>
        </div>
    )
}