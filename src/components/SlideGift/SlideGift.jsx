import Wrapper from "../../hoc/Wrapper";
import imgBackgroundLight from "../../img/bg-light-small.png";
import imgGift from "../../img/bg-gift.png";
import React from "react";

const SlideGift = () => {
    return (
        <section className="c-section gift">
            <Wrapper>
            <h1 className="c-title c-title--center c-title--h1">Примите участие в розыгрыше призов Клана Престо</h1>
            <div className="c-grid c-grid--row c-grid--between">
                <div className="c-grid-col c-grid-col-5">
                    <div className="c-text">
                        <p className="c-text-introduction">
                        Представляем новую акцию от Клана. Розыгрыши — чаще! Призов — намного больше! 
                        </p>
                        <p>
                        Мы устроим 2 розыгрыша с призами разного номинала. 
                        В числе главных: Смартфон Samsung Galaxy A52, умные часы Apple Watch SE, смартфон Honor 30S
                        </p>
                        <p>
                        Помимо этого будет много интересных гаджетов: кофемашина Philips, беспроводные наушники JBL,
                        аккумулятор Xiaomi, колонка JBL, Яндекс Станция, термокружки,
                        кольцевая светодиодная лампа для лучших селфи 😍
                        </p>
                        <p>
                        А также вас ждут призы от совместных коллабораций на протяжении всего периода действия акции.
                        </p>
                    </div>
                    <div className="c-btn-layout c-btn-layout--left">
                        <a href="https://pizzapresto.ru/menu/#!/Pitstsa" className="c-btn large c-btn--primary">Сделать заказ</a>
                    </div>
                </div>
                <div className="c-grid-col c-grid-col-7">
                    <div className="c-tag a-floating a-floating-20">Апрель-июнь</div>
                    <div className="gift-img">
                        <div className="gift-img__light ">
                            <img src={imgBackgroundLight} alt=""/>
                        </div>
                        <div className="gift-img__pic a-floating">
                            <img src={imgGift} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            </Wrapper>
        </section>
    );
}

export default SlideGift;