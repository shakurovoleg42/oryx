import "./form.scss";

export const MainFooterForm = () => {
    return (
        <form>
            <div className="form-group">
                <input type="text" className="form-control1" id="" placeholder="Имя"/>
            </div>
            <div className="form-group" style={{marginTop: "22.44px"}}>
                <input type="text" className="form-control2" id="" placeholder="Введите номер"/>
                <button type="submit" className="btn btn-primary">Отправить</button>
            </div>
        </form>

    )
}