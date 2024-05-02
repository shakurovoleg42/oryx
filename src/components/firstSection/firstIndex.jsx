import { MainNavBar } from "./NavBar/MainNavBar";
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