import React from "react";
import Wrapper from "../../hoc/Wrapper";

const SlideAction = () => {
    return (
        <section className="action c-section c-section-inset">
            <Wrapper>
                <h3 className="c-title c-title--h3 c-title--center">
                    <span>
                    Собирайте карточки игры, заказывая блюда со специальным значком в нашей службе доставки
                    </span>
                    <div className="c-title-subtitle">
                    Блюда и карточки периодически будут меняться, поэтому вы сможете заказать недостающие карточки со своим любимым блюдом
                    </div>
                </h3>
                <div className="c-btn-layout c-btn-layout--center">
                    <a href="https://pizzapresto.ru/" className="c-btn large c-btn--primary">Перейти на сайт</a>
                </div>

                
            </Wrapper>
           
        </section>
    );
}

export default SlideAction;