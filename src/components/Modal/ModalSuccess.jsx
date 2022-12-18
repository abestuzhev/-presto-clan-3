import { Link } from "react-router-dom";

const ModalSuccess = () => {
    return (
        <div className="c-modal--success">
            <div className="success">                
                <div className="success-icon"></div>
                <div className="success-body">
                    <div className="success-text">Твой купон успешно зарегистрирован. Сохрани его для получения подарка.</div>
                    <div className="c-btn-layout c-btn-layout--center">
                        <Link to="/" className="c-btn c-btn-outline">На главную</Link>
                        {/*<Link to="/" className="c-btn large c-btn--primary">На главную</Link>*/}
                    </div>
                </div>                             
            </div>
        </div>
    )
}

export default ModalSuccess;