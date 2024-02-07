import React from 'react';
import ImgGiftIphone from "./../img/img-gift-iphone15.png";
import ImgGiftWatch from "./../img/img-gift-ps-5.png";
import ImgGiftStation from "./../img/img-gift-station-3.png";
import ImgGiftAirpods from "./../img/img-gift-airpods.png";
import ImgPerson from "./../img/banner-person-2.png";
import VideoStep1 from "./../video/step-1.mp4";

import {Link} from "react-router-dom";
import stockPositionPDF from "../doc/stock-position-4.0.pdf";

const Home = () => {
    const gifts = [
        {
            id: 1,
            title: "Смартфон Apple iPhone 15",
            property: "128 Гб",
            img: ImgGiftIphone,
            class: "gift-card gift-card--top"
        },
        {
            id: 2,
            title: "Игровая консоль PlayStation 5 ",
            property: "Digital Edition",
            img: ImgGiftWatch,
            // class: "gift-card gift-card--top gift-card--ps"
            class: "gift-card gift-card--bottom gift-card--ps"
        },
        {
            id: 3,
            title: "Умная колонка Яндекс.Станция Миди",
            property: "с часами",
            img: ImgGiftStation,
            class: "gift-card gift-card--top gift-card--station"
        },
        {
            id: 4,
            title: "Наушники Apple AirPods Pro 2 Type-C",
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
                                <div className="home-banner__title">КЛАН ПРЕСТО. НОВЫЙ СЕЗОН</div>
                            </div>

                            <div className="home-banner__text">
                                {/*<p>Не пропусти розыгрыш 23 февраля в 18:00 в прямом эфире <a href="https://vk.com/pizzapresto" className="c-link" target="_blank">ВКонтакте</a></p>*/}
                                <p>Не пропусти розыгрыш 13 февраля 2024 года.</p>
                                <p>Регистрация купонов по 06 февраля 2024 года.</p>
                                <p>
                                    Больше купонов — больше шансов стать победителем!
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
                            {/*<div className="c-title">*/}
                            {/*    <h2>Как принять участие?</h2>*/}
                            {/*</div>*/}
                            {/*<div className="rules-list">*/}
                            {/*    <div className="rules-list__item">*/}
                            {/*        <div className="rules-card">*/}
                            {/*            <div className="rules-card__num">1</div>*/}
                            {/*            <div className="rules-card__body">*/}
                            {/*                <div className="rules-card__text c-text-medium">*/}
                            {/*                    Сделай заказ в нашей службе доставки на сумму от 1500 ₽*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="rules-list__item">*/}
                            {/*        <div className="rules-card">*/}
                            {/*            <div className="rules-card__num">2</div>*/}
                            {/*            <div className="rules-card__body">*/}
                            {/*                <div className="rules-card__text">*/}
                            {/*                    Сохрани кассовый чек и купон для участия в розыгрыше*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="rules-list__item">*/}
                            {/*        <div className="rules-card">*/}
                            {/*            <div className="rules-card__num">3</div>*/}
                            {/*            <div className="rules-card__body">*/}
                            {/*                <div className="rules-card__text">*/}
                            {/*                    Зарегистрируй номер купона на сайте*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="rules-video">*/}
                            {/*    <video controls loop>*/}
                            {/*        <source src={VideoStep1} type="video/mp4" />*/}
                            {/*    </video>*/}
                            {/*</div>*/}

                            {/*<div className="rules-note">*/}
                            {/*    <div className="rules-note__text">*/}

                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="rules-note">
                                <div className="rules-note__text">
                                    Не пропусти подведение итогов, которое пройдет 13 февраля 2024 года в онлайн-режиме в группе ВКонтакте.
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