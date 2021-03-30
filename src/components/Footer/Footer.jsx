import React from "react";
import Wrapper from "../../hoc/Wrapper";

const Footer = () => {
    return (
        <footer className="footer">
            <Wrapper>
                <div className="c-grid c-grid--row c-grid--between">
                    <div className="c-grid-col c-grid-col">
                        <div className="footer-copyright">© 2021 Пиццерия Престо™ Все права защищены</div>                        
                    </div>
                    <div className="c-grid-col">
                        {/* <a href="./doc/Uslovia_provedenia_aktsii_Klan_Presto.pdf" className="c-link" target="_blank" class="c-link">Положение акции</a> */}
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer;