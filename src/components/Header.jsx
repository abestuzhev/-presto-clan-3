import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../img/logo-presto.svg";
import {api} from "../api/api";

const Header = () => {

    const handler = async () => {
        const res = await api.getCities()
        console.log("getCities", res)
    }

    return (
        <div className="header">
            <div className="layout">
                <div className="header-grid">
                    <div className="header-grid__left">
                        <div className="header-logo">
                            <img src={Logo} alt=""/>
                        </div>
                    </div>
                    <div className="header-grid__right">
                        {/*<button onClick={handler} className="header-order">*/}
                        {/*    города*/}
                        {/*</button>*/}
                        <a href="https://pizzapresto.ru" className="header-order">
                            <span>Сделать</span> заказ
                        </a>
                        <Link to="/add/step-1" className="header-login">
                            {/*<span className="header-login__icon"></span>*/}
                            <div className="header-login__link">Регистрация <span>купона</span></div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;