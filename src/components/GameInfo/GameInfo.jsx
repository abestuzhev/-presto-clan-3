import Wrapper from "../../hoc/Wrapper";
import imgWhy from "../../img/img-why.png";

const GameInfo = () => {
    return (
        <div className="game-more c-section">
            <Wrapper>
                <div className="game-info">
                    <div className="c-grid c-grid--row c-grid--align-center c-grid--between">
                        <div className="c-grid-col c-grid-col-6">
                            <div className="game-info__img">
                                <img src={imgWhy} alt=""/>
                            </div>
                        </div>
                        <div className="c-grid-col c-grid-col-6">
                            <h2 className="c-title c-title--h3">Почему игра «Мафия» такая популярная?</h2>
                            <div className="c-text">
                                <p>
                                Исследователи выделяют два типа игр: состязание (борьба) и представление (маскарад). «Мафия» удачно сочетает в себе черты обоих типов. Она одновременно и шоу, и борьба за выживание. 
                                </p>
                                <p>
                                В отличие от карт, эта игра никак не связана с деньгами, в отличие от гольфа, не требует финансовых затрат, в отличие от футбола — хорошей физической подготовки. Самое главное: она приносит столь ценимое интеллектуальное удовольствие. В бескорыстной несерьёзности игры скрыт её потенциал
                                </p>   
                                <p>
                                    Мафия признана одной из «50-ти наиболее исторически и культурно существенных игр, появившихся с 1800 года»
                                </p>                     
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-advantage">
                    <div className="c-grid c-grid--row c-grid--align-center c-grid--between">   
                        <div className="c-grid-col c-grid-col-7">
                            <h2 className="c-title c-title--h3">А еще ... Она развивает навыки 💪 </h2>
                            <div className="c-text">
                                <p>
                                Логика, Память, Сообразительность, Командное взаимодействие, Социальное влияние, Стратегичность, Театральность, Интуиция
                                </p>
                                                
                            </div>
                        </div>
                        <div className="c-grid-col c-grid-col-5">
                            <div className="game-advantage__img">
                                <img src="" alt=""/>
                            </div>                        
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default GameInfo;