import React from "react";
import Wrapper from "../../hoc/Wrapper";
import icon1 from "../../img/icon-1.svg";
import icon2 from "../../img/icon-2.svg";
import icon3 from "../../img/icon-3.svg";


const Rules = (props) => {
    return (
        <div className="rules c-section">
            <Wrapper>
                <h2 className="c-title c-title--center c-title--h2">
                    <span>Правила участия</span>
                    <div className="c-title-subtitle">Да прибудет с вами сила клана!</div>             
                </h2>
                <div className="rules-list">
                    <div className="c-grid c-grid--around">
                        <div className="c-grid-col c-grid-col-4">
                            <div className="c-card-advantage vertically">
                                <div className="c-card-advantage__pic">
                                <img src={icon1} alt=""/>
                                </div>
                                <div className="c-card-advantage__body">
                                    <div className="c-card-advantage__text">
                                    Сделайте заказ в нашей службе доставки на сумму от 1000 ₽
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div className="c-grid-col c-grid-col-4">
                            <div className="c-card-advantage vertically">
                                <div className="c-card-advantage__pic">
                                    <img src={icon2} alt=""/>
                                </div>
                                <div className="c-card-advantage__body">
                                    <div className="c-card-advantage__text">
                                    Зарегистрируйте номер кассового чека на сайте
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="c-grid-col c-grid-col-4">
                            <div className="c-card-advantage vertically">
                                <div className="c-card-advantage__pic">
                                <img src={icon3} alt=""/>
                                </div>
                                <div className="c-card-advantage__body">
                                    <div className="c-card-advantage__text">
                                    Сохраните данный чек для участия в розыгрыше
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="c-text">
                    Не пропустите подведение итогов, которое будет проходить в онлайн-режиме 
                    в группе <a href="https://vk.com/pizzapresto">вКонтакте </a>. С более подробными условиями акции и механикой проведения розыгрышей 
                    можно ознакомиться в положении акции.                     
                </div>

            </Wrapper>
        </div>
    );
}

export default Rules;