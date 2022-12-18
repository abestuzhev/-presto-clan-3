import { Link } from "react-router-dom";

const ModalError = () => {
    return (
        <div className="c-modal--error">
            <div className="error">                
                <div className="error-text">
                        <div className="c-text">
                        Что-то пошло не так. Повторите регистрацию или напишите нам на email <a className="c-link" href="mailto:help@pizzapresto.ru">help@pizzapresto.ru</a>. Отвечаем в течение 36 часов
                        </div>
                    </div>
                <div className="c-btn-layout c-btn-layout--center">  
                    <Link to="/" className="c-btn c-btn--primary">На главную</Link>
                </div>                
            </div>
        </div>
    )
}

export default ModalError;