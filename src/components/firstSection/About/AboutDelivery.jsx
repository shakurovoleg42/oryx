import "./aboutDelivery.scss";

export const AboutDelivery = () => {
    console.log("aboutOryx is working")

    return (
        <div className="about">
            <div className="bethefaster">
                <p>Доставка <span>посылок</span> из США в <span>Казахстан</span></p>
                <div className="quick-service">
                    <p >Покупайте в любых интернет-магазинах Америки, а мы гарантируем быструю доставку. Регистрируйтесь сейчас и откройте себе доступ к лучшим товарам и акциям из США. Просто, Надежно и Удобно.</p>
                </div>
            </div>
                
                <img src="/src/assets/img/images/airplane.png" alt="airplane"/>
        </div>
    )
}