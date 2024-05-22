import "./form.scss";

export const MainFooter = () => {
    return (
        <form>
            <div className="form-group">
                <input type="name" className="form-control1" id="" placeholder="Имя"/>
            </div>
            <div className="form-group" style={{marginTop: "22.44px"}}>
                <input type="text" className="form-control2" id="" placeholder="Введите номер"/>
            </div>
        </form>
    )
}