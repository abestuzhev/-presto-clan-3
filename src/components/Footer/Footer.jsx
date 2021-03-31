import React from "react";
import Wrapper from "../../hoc/Wrapper";
import stockPositionPDF from "../../doc/stock-position-2.0.pdf"

const Footer = () => {
    return (
        <footer className="footer">
            <Wrapper>
                <div className="c-grid c-grid--row c-grid--between">
                    <div className="c-grid-col c-grid-col">
                        <div className="footer-copyright">© 2021 Пиццерия Престо™ Все права защищены</div>                        
                    </div>
                    <div className="c-grid-col">
                         <a href={stockPositionPDF} className="c-link" target="_blank" >Положение акции</a>
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer;