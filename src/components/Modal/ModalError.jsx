import { Link } from "react-router-dom";

const ModalError = () => {
    return (
        <div className="c-modal--error">
            <div className="error">                
                <div className="error-text">Что-то пошло не так. Повторите регистрацию или напишите нам на email <a href="mailto:help@pizzapresto.ru">help@pizzapresto.ru</a>. Отвечаем в течении 24 часов</div>
                <div className="c-btn-layout c-btn-layout--center">  
                <Link to="/" className="c-btn c-btn-outline">На главную</Link>
                </div>                
            </div>
        </div>
    )
}

export default ModalError;