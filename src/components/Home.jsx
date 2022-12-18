import React from 'react';
import ImgGiftIphone from "./../img/img-gift-iphone14.png";
import ImgGiftWatch from "./../img/img-gift-watch-7.png";
import ImgGiftHonor from "./../img/img-gift-station.png";
import ImgGiftAirpods from "./../img/img-gift-airpods.png";
import ImgPerson from "./../img/banner-person.png";

import {Link} from "react-router-dom";
import stockPositionPDF from "../doc/stock-position-3.0.pdf";

const Home = () => {
    const gifts = [
        {
            id: 1,
            title: "Смартфон Apple iPhone 14 Pro",
            property: "256 Гб",
            img: ImgGiftIphone,
            class: "gift-card gift-card--top"
        },
        {
            id: 2,
            title: "Смарт-часы Apple Watch Series 7",
            property: "41 мм",
            img: ImgGiftWatch,
            class: "gift-card gift-card--bottom"
        },
        {
            id: 3,
            title: "Умная колонка Яндекс.Станция Мини",
            property: "с часами",
            img: ImgGiftHonor,
            class: "gift-card gift-card--right"
        },
        {
            id: 4,
            title: "Наушники Apple AirPods Pro",
            property: "2",
            img: ImgGiftAirpods,
            class: "gift-card gift-card--bottom"
        }

    ]
    return (
        <>
            <div className="home">
                <div className="home-banner">
                    <div className="home-banner-layout">
                        <div className="home-banner-body">
                            <div className="home-banner-body__head">
                                <div className="home-banner__label">Декабрь — Февраль</div>
                                <div className="home-banner__title">КЛАН ПРЕСТО. ВОЗВРАЩЕНИЕ</div>
                            </div>

                            <div className="home-banner__text">
                                <p>Главный розыгрыш 23 февраля 2023 года.</p>
                                <p>Регистрация купонов с 12 декабря 2022 года до 12 февраля 2023 года.</p>
                                <p>
                                    Собирай купоны и повышай свой шанс стать победителем!
                                </p>
                            </div>
                            {/*<button className="c-btn large c-btn--primary">Добавить</button>*/}
                        </div>
                        <div className="home-banner-img">
                            <img src={ImgPerson} alt=""/>
                        </div>
                    </div>

                </div>
                <div className="layout">
                    <div className="home-block">
                        <div className="home-gift">
                            <div className="c-title">
                                <h2>Главные подарки</h2>
                            </div>
                            <div className="gift-list">
                                {
                                    gifts.map(product => {
                                        return (
                                            <div className="gift-list__item">
                                                <div className={product.class}>
                                                    <div className="gift-card__img">
                                                        <img src={product.img} alt=""/>
                                                    </div>
                                                    <div className="gift-card__body">
                                                        <div className="gift-card__title">{product.title}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="home-block">
                        <div className="home-rules">
                            <div className="c-title">
                                <h2>Как принять участие?</h2>
                            </div>
                            <div className="rules-list">
                                <div className="rules-list__item">
                                    <div className="rules-card">
                                        <div className="rules-card__num">1</div>
                                        <div className="rules-card__body">
                                            <div className="rules-card__text c-text-medium">
                                                Сделай заказ в нашей службе доставки на сумму от 1500 ₽
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rules-list__item">
                                    <div className="rules-card">
                                        <div className="rules-card__num">2</div>
                                        <div className="rules-card__body">
                                            <div className="rules-card__text">
                                                Сохрани кассовый чек и купон для участия в розыгрыше
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rules-list__item">
                                    <div className="rules-card">
                                        <div className="rules-card__num">3</div>
                                        <div className="rules-card__body">
                                            <div className="rules-card__text">
                                                Зарегистрируй номер купона на сайте
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rules-note">
                                <div className="rules-note__text">
                                    Не пропусти подведение итогов, которое пройдет 23 февраля 2023 года в онлайн-режиме в группе ВКонтакте.
                                    С подробными условиями акции можно ознакомиться в нашем <a href={stockPositionPDF} className="c-link" target="_blank">Положении акции</a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;