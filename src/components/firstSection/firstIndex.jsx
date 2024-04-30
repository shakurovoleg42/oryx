import { MainNavBar } from "./NavBar/MainNavBar";
import { AboutOryx } from "./About/AboutOryx";
import './firstIndex.scss';

export const FirstIndex = () => {
    return (
        <div className="section">
            <MainNavBar/>
            <AboutOryx/>
        </div>
    )
}