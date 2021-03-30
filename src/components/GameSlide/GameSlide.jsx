import react from "react";
import Wrapper from "../../hoc/Wrapper";
import imgPerson1 from "../../img/card-person-1.jpg"

const GameSlide = () => {
    return (
        <section className="game c-section">
            <Wrapper>
            <h2 className="c-title c-title--center c-title--h2">
                <span>А еще мы не удержались и сделали свою версию легендарной игры «Мафия»</span>
                <div className="c-title-subtitle">И придали нашим героям немного человечности 😏</div>
            </h2>

            <div className="game-scene">
                <div className="game-scene-decor game-scene-decor-1 a-scale a-scale-10"></div>
                <div className="game-scene-decor game-scene-decor-2 a-scale a-scale-10"></div>
                <div className="game-scene-decor game-scene-decor-3 a-scale a-scale-20"></div>
                <div className="game-scene-decor game-scene-decor-4 a-scale a-scale-30"></div>
                <div className="game-scene-decor game-scene-decor-5 a-scale a-scale-30"></div>
                <div className="game-scene-layout">
                    <div className="a-floating a-floating-30">
                        <div className="game-card game-card-1">
                            <img src={imgPerson1} alt="" />                  
                        </div>
                    </div>
                    <div className="a-floating a-floating-20">
                        <div className="game-card game-card-2">
                            <img src={imgPerson1} alt="" />                  
                        </div>
                    </div>
                    <div className="a-floating a-floating-10">
                        <div className="game-card game-card-3">
                            <img src={imgPerson1} alt="" />                  
                        </div>
                    </div>
                </div>                
            </div>
            
            </Wrapper>
        </section>
    );
}

export default GameSlide;