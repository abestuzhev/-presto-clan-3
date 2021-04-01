import { Link } from "react-router-dom";

const ModalSuccess = () => {
    return (
        <div className="c-modal--success">
            <div className="success">                
                <div className="success-icon"></div>
                <div className="success-body">
                    <div className="success-text">Вы успешно зарегистрировали чек! Сохраните его для получения приза.</div>
                    <div className="c-btn-layout c-btn-layout--center">
                        <Link to="/" className="c-btn c-btn-outline">На главную</Link>
                    </div>   
                </div>                             
            </div>
        </div>
    )
}

export default ModalSuccess;